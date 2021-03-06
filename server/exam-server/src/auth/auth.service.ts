import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { RegisterUserDTO } from './dto/register.dto';
import { LoginUserDto } from './dto/user-login.dto';
import { AdminsService } from 'src/admins/admins.service';
import { LoginAdminDTO } from './dto/admin-login.dto';
import { ForgotPasswordDTO } from './dto/user-forgot-password.dto';
import { ConfigService } from '@nestjs/config';
import { Role } from 'src/enums/roles.enum';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) { }

  async getUserIfRefreshTokenMatches(refreshToken: string, userId: number) {
    const user = await this.userService.findOne({ refreshToken: refreshToken, id: userId });
    if (!user) {
      throw new BadRequestException('Refresh token is invalid');
    }
    return user;
  }

  async validateUserById(id: number) {
    const user = await this.userService.findOne({ id: id });
    if (!user) {
      throw new BadRequestException('User not found');
    }
    return user;
  }

  async login(user: LoginUserDto) {
    let userDB = await this.userService.findOne({ email: user.email, isDeleted: false });
    if (!userDB) {
      throw new NotFoundException('User not found');
    }
    const passwordDBHash = userDB.password.replace('$2y$10$', '$2b$10$'); // change PHP bcrypt hash to Nodejs bcrypt hash
    const isPasswordMatched = await bcrypt.compare(user.password, passwordDBHash);
    if (!isPasswordMatched) {
      throw new BadRequestException('Password is incorrect');
    }
    const token = await this.signAccessToken(userDB.id, userDB.email, userDB.role);

    return {
      accessToken: token,
      email: userDB.email,
      role: userDB.role,
    };
  }

  async validateRefreshToken(refreshToken: string) {
    const user = await this.userService.findOne({ refreshToken: refreshToken });
    if (!user) {
      throw new BadRequestException('User not found');
    }
    const token = await this.signAccessToken(user.id, user.email);
    return user;
  }

  async validateEmail(email: string) {
    const userDB = await this.userService.findOne({ email: email }).catch();
    let isQuiz = false;
    if (userDB?.password.includes('$2y$10$')) {
      isQuiz = true;
    }
    if (userDB) {
      return { exist: true, isQuiz };
    }
    return { exist: false, isQuiz };
  }

  async forgotPassword(forgot: ForgotPasswordDTO) {
    const user = await this.userService.findOne({ email: forgot.email });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    const currentDate = new Date();
    const lastUpdate = new Date(user.updatedAt);

    if ((currentDate.getTime() + 86400000) < lastUpdate.getTime()) {
      throw new BadRequestException('Time update have some problems');
    }
    const newPassword = bcrypt.hashSync(forgot.password, 10);
    await this.userService.updateByEmail(forgot.email, {
      password: newPassword,
    });
    const token = await this.signAccessToken(user.id, user.email);
    return {
      accessToken: token,
      email: user.email,
    };
  }

  async register(user: RegisterUserDTO) {
    const userDB = await this.userService.findOne({ email: user.email }).catch(err => { });
    if (userDB) {
      throw new BadRequestException('User already exists');
    }
    const hashPassword = await bcrypt.hash(user.password, 10);
    //check role of user
    if(user.role !== Role.STUDENT && user.role !== Role.TEACHER){
      throw new BadRequestException('Role is not correct');
    }
    //create user without refresh token
    const newUser = await this.userService.create({
      email: user.email,
      password: hashPassword,
      role: user.role,
    });
    const token = await this.signAccessToken(newUser.id, newUser.email, newUser.role);
    // update refresh token dont need await
    delete newUser.password;
    return { ...newUser, token };
  }

  async signAccessToken(userId: number, email: string, role: number = 0): Promise<string> {
    const token = await this.jwtService.sign({ userId, email, role },
      {
        expiresIn: this.configService.get('JWT_EXPIRATION'),
        secret: this.configService.get('JWT_SECRET')
      });
    return token;
  }

  async signRefreshToken(userId: number, email: string): Promise<string> {
    const refreshToken = await this.jwtService.sign({ userId, email },
      {
        expiresIn: this.configService.get('JWT_REFRESH_TOKEN_EXPIRATION'),
        secret: this.configService.get('JWT_REFRESH_TOKEN_SECRET')
      });
    return refreshToken;
  }
}
