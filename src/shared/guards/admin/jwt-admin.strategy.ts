import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';
import { Request } from 'express';
@Injectable()
export class JwtAdminStrategy extends PassportStrategy(Strategy, 'jwt-admin') {
    constructor(private configService: ConfigService) {
        super({
            jwtFromRequest: ExtractJwt.fromExtractors(
                [
                    (req) => {
                        if (!req.cookies['jwt']) {
                            throw new UnauthorizedException('Debe iniciar sesión como adminsitrador.');
                        }
                        return req.cookies['jwt']
                    }
                ]),
            ignoreExpiration: false,
            passReqToCallback: true,
            secretOrKey: configService.get<string>('JWT_SECRET'),
        });
    }

    async validate(req: Request, payload: any) {
        if (payload.email != process.env.ADMIN_EMAIL)
            throw new UnauthorizedException('Solo un administrador puede hacer operaciones en este contexto')
        return payload;
    }
}