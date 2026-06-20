import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';
import { Request } from 'express';
import { CreateOrderDto } from 'src/order/dto/create-order.dto';
@Injectable()
export class JwtOwnerStrategy extends PassportStrategy(Strategy, 'jwt-owner') {
    constructor(private configService: ConfigService) {
        super({
            jwtFromRequest: ExtractJwt.fromExtractors(
                [
                    (req) => req.cookies['jwt']
                ]),
            ignoreExpiration: false,
            passReqToCallback: true,
            secretOrKey: configService.get<string>('JWT_SECRET'),
        });
    }

    async validate(req: Request, payload: any) {
        // Admin bypass - permite a los admins editar/eliminar cualquier usuario
        if (payload.email === process.env.ADMIN_EMAIL) {
            return payload;
        }

        const userIdFromToken = payload.sub;
        const userIdToEdit = req.params.id;

        if (!userIdToEdit) {
            throw new UnauthorizedException('ID de usuario no proporcionado');
        }

        if (userIdFromToken !== userIdToEdit) {
            throw new UnauthorizedException(
                'No puedes editar un usuario que no eres tú',
            );
        }
        return payload;
    }
}

@Injectable()
export class JwtOrderOwnerStrategy extends PassportStrategy(Strategy, 'jwt-order-owner') {
    constructor(private configService: ConfigService) {
        super({
            jwtFromRequest: ExtractJwt.fromExtractors(
                [
                    (req) => req.cookies['jwt']
                ]),
            ignoreExpiration: false,
            passReqToCallback: true,
            secretOrKey: configService.get<string>('JWT_SECRET'),
        });
    }

    async validate(req: Request, payload: any) {

        const userIdFromToken = payload.sub;
        const order = req.body as CreateOrderDto;
        if (!req.body) throw new UnauthorizedException('Informacion no proporcionada');

        if (userIdFromToken !== order.userId) {
            throw new UnauthorizedException(
                'No puedes hacer un pedido en nombre de otro usuario',
            );
        }
        return payload;
    }
}