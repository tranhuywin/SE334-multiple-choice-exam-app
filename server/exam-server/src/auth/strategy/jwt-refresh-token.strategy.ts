import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Request } from 'express';
import { AuthService } from '../auth.service';

@Injectable()
export class JwtRefreshTokenStrategy extends PassportStrategy(Strategy, 'jwt-refresh-token') {
    private authService: AuthService;

    constructor(configService: ConfigService, authService: AuthService) {
        super({
            jwtFromRequest: ExtractJwt.fromExtractors([(request: Request) => {
                return request.body.refreshToken;
            }]),
            secretOrKey: configService.get('JWT_REFRESH_TOKEN_SECRET'),
            passReqToCallback: true,
        });
        this.authService = authService;
    }

    async validate(request: Request, payload: IJwtPayload) {
        const refreshToken = request.body.refreshToken;
        return this.authService.getUserIfRefreshTokenMatches(refreshToken, payload.userId);
    }
}