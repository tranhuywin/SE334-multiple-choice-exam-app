import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UsersModule } from 'src/users/users.module';
import { AuthService } from './auth.service';
import AppController from './auth.controller';
import JwtStrategy from './strategy/jwt.strategy';
import { AdminsModule } from 'src/admins/admins.module';

import { JwtRefreshTokenStrategy } from './strategy/jwt-refresh-token.strategy';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
    UsersModule,
    PassportModule,
    AdminsModule,
    HttpModule,
    JwtModule.registerAsync({
      useFactory: (configService: ConfigService) => ({
        secret: configService.get('JWT_SECRET'),
        signOptions: {
          expiresIn: configService.get('JWT_EXPIRATION') || '600s',
        },
      }),
      imports: [ConfigModule],
      inject: [ConfigService],
    }),
  ],
  providers: [AuthService, JwtStrategy, ConfigService, JwtRefreshTokenStrategy],
  controllers: [AppController],
  exports: [AuthService],
})
export class AuthModule {}
