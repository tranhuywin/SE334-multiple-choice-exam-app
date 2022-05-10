import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { RegisterUserDTO } from './dto/register.dto';
import { LoginUserDto } from './dto/user-login.dto';
import { AdminsService } from 'src/admins/admins.service';
import { LoginAdminDTO } from './dto/admin-login.dto';
import { LoginThirdDTO } from './dto/third-login.dto';
import { ForgotPasswordDTO } from './dto/user-forgot-password.dto';
import { ConfigService } from '@nestjs/config';
import { Role } from 'src/enums/roles.enum';
import { RegisterThirdPartyDto } from './dto/register-third-party.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private readonly jwtService: JwtService,
    private readonly adminService: AdminsService,
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

  async validateAdminById(id: number) {
    const admin = await this.adminService.findOne({ id: id });
    if (!admin) {
      throw new BadRequestException('Admin not found');
    }
    return admin;
  }

  async login(user: LoginUserDto) {
    let userDB = await this.userService.findOne({ phoneNumber: user.phone, isDeleted: false });
    if (!userDB) {
      // register
      //userDB = await this.register({phone: user.phone, password: user.password});
      throw new NotFoundException('User not found');
    }
    const passwordDBHash = userDB.password.replace('$2y$10$', '$2b$10$'); // change PHP bcrypt hash to Nodejs bcrypt hash
    const isPasswordMatched = await bcrypt.compare(user.password, passwordDBHash);
    if (!isPasswordMatched) {
      throw new BadRequestException('Password is incorrect');
    }
    const token = await this.signAccessToken(userDB.id, userDB.phoneNumber);

    return {
      accessToken: token,
      refreshToken: userDB.refreshToken,
      avatar: userDB.avatar,
    };
  }

  async validateRefreshToken(refreshToken: string) {
    const user = await this.userService.findOne({ refreshToken: refreshToken });
    if (!user) {
      throw new BadRequestException('User not found');
    }
    const token = await this.signAccessToken(user.id, user.phoneNumber);
    return user;
  }

  async adminLogin(admin: LoginAdminDTO) {
    const adminDB = await this.adminService.findOne({
      userName: admin.username,
    });
    if (!adminDB) {
      throw new BadRequestException('Admin not found');
    }
    const passwordDBHash = adminDB.password.replace('$2y$10$', '$2b$10$'); // convert PHP bcrypt hash to Nodejs bcrypt hash
    const isPasswordMatched = await bcrypt.compare(
      admin.password,
      passwordDBHash,
    );
    if (!isPasswordMatched) {
      throw new BadRequestException('Password is incorrect');
    }
    const token = await this.signAccessToken(adminDB.id, '', adminDB.role);
    return {
      accessToken: token,
      refreshToken: adminDB.refreshToken,
      username: adminDB.userName,
      role: adminDB.role,
    };
  }

  async validatePhone(phone: string) {
    const userDB = await this.userService.findOne({ phoneNumber: phone }).catch();
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
    const user = await this.userService.findOne({ phoneNumber: forgot.phone });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    const currentDate = new Date(forgot.date);
    const lastUpdate = new Date(user.updatedAt);

    if ((currentDate.getTime() + 86400000) < lastUpdate.getTime()) {
      throw new BadRequestException('Time update have some problems');
    }
    const newPassword = bcrypt.hashSync(forgot.password, 10);
    await this.userService.updateByPhone(forgot.phone, {
      password: newPassword,
    });
    const token = await this.signAccessToken(user.id, user.phoneNumber);
    return {
      accessToken: token,
      phoneNumber: user.phoneNumber,
    };
  }

  async register(user: RegisterUserDTO) {
    const userDB = await this.userService.findOne({ phoneNumber: user.phone }).catch(err => { });
    if (userDB) {
      throw new BadRequestException('User already exists');
    }
    const hashPassword = await bcrypt.hash(user.password, 10);
    //create user without refresh token
    const newUser = await this.userService.create({
      phoneNumber: user.phone,
      password: hashPassword,
      refreshToken: '',
    });
    const token = await this.signAccessToken(newUser.id, newUser.phoneNumber);
    //create refresh token with userId, phone after user is created
    const refreshToken = await this.signRefreshToken(newUser.id, user.phone);
    // update refresh token dont need await
    this.userService.updateByPhone(user.phone, {
      refreshToken: refreshToken,
    });
    delete newUser.password;
    return { ...newUser, refreshToken: refreshToken, token };
  }

  async signAccessToken(userId: number, phoneNumber: string, role: number = 0): Promise<string> {
    const token = await this.jwtService.sign({ userId, phoneNumber, role },
      {
        expiresIn: this.configService.get('JWT_EXPIRATION'),
        secret: this.configService.get('JWT_SECRET')
      });
    return token;
  }

  async signRefreshToken(userId: number, phoneNumber: string): Promise<string> {
    const refreshToken = await this.jwtService.sign({ userId, phoneNumber },
      {
        expiresIn: this.configService.get('JWT_REFRESH_TOKEN_EXPIRATION'),
        secret: this.configService.get('JWT_REFRESH_TOKEN_SECRET')
      });
    return refreshToken;
  }
}
