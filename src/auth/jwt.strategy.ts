// src/auth/jwt.strategy.ts
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(private configService: ConfigService) {
        console.log('JWT_SECRET:', configService.get<string>('JWT_SECRET'));
        super({
            jwtFromRequest: ExtractJwt.fromExtractors([
                (req) => req.cookies['jwt'],
            ]),
            ignoreExpiration: false,
            secretOrKey: configService.get<string>('JWT_SECRET') ,
        });
    }

    async validate(payload: any) {
        return { userId: payload.sub, username: payload.username };
    }
}
