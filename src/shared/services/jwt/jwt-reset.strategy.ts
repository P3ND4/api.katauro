// src/auth/jwt-reset.strategy.ts
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class JwtResetStrategy extends PassportStrategy(Strategy, 'jwt-reset') {
    constructor(private configService: ConfigService) {
        super({
            jwtFromRequest: ExtractJwt.fromExtractors(
                [
                    (req) => req.cookies['jwt-reset']
                ]),
            secretOrKey: configService.get<string>('JWT_SECRET'),
            ignoreExpiration: false,
        });
    }

    async validate(payload: any) {
        if (payload.purpose !== 'reset-password') {
            throw new UnauthorizedException('Token inválido');
        }

        return { userId: payload.sub };
    }
}
