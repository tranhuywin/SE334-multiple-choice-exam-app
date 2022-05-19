import {
  Controller,
  Post,
  Body,
  UseGuards,
  Req,
} from '@nestjs/common';
import { Request } from 'express';
import { AuthService } from './auth.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { LoginUserDto } from './dto/user-login.dto';
import { LoginAdminDTO } from './dto/admin-login.dto';
import { RegisterUserDTO } from './dto/register.dto';
import { ForgotPasswordDTO } from './dto/user-forgot-password.dto';

@Controller('auth')
@ApiTags('auth')
export default class AppController {
  constructor(
    private readonly authService: AuthService,
  ) { }

  @Post('/login')
  async login(@Body() user: LoginUserDto) {
    const dataLogin = await this.authService.login(user);
    return {
      data: {
        user: dataLogin,
      },
    };
  }

  @Post('/admin/login')
  async adminLogin(@Body() admin: LoginAdminDTO): Promise<IResponse> {
    const dataLogin = await this.authService.adminLogin(admin);
    return {
      data: dataLogin,
    };
  }

  @Post('/forgot-password')
  @ApiOperation({ summary: 'Reset password' })
  async forgotPassword(@Body() forgot: ForgotPasswordDTO): Promise<IResponse> {
    const dataForgot = await this.authService.forgotPassword(forgot);
    return {
      data: dataForgot,
    };
  }

  @Post('/register')
  @ApiOperation({ summary: 'Register new user' })
  async register(@Body() newUser: RegisterUserDTO): Promise<IResponse> {
    const dataRegister = await this.authService.register(newUser);
    delete dataRegister.password;
    return {
      data: dataRegister,
    };
  }
}
