import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AuthService } from '../auth.service';
import { Role } from 'src/enums/roles.enum';
@Injectable()
export default class JwtStrategy extends PassportStrategy(Strategy) {
  private authService: AuthService;

  constructor(configService: ConfigService, authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: configService.get('JWT_SECRET'),
      signOption: {
        expiresIn: configService.get('JWT_EXPIRATION'),
      }
    });
    this.authService = authService;
  }

  async validate(payload: IJwtPayload) {
    const user = await this.authService.validateUserById(payload.userId);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
