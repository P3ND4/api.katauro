"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtOrderOwnerStrategy = exports.JwtOwnerStrategy = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const passport_jwt_1 = require("passport-jwt");
const config_1 = require("@nestjs/config");
let JwtOwnerStrategy = class JwtOwnerStrategy extends (0, passport_1.PassportStrategy)(passport_jwt_1.Strategy, 'jwt-owner') {
    configService;
    constructor(configService) {
        super({
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromExtractors([
                (req) => req.cookies['jwt']
            ]),
            ignoreExpiration: false,
            passReqToCallback: true,
            secretOrKey: configService.get('JWT_SECRET'),
        });
        this.configService = configService;
    }
    async validate(req, payload) {
        const userIdFromToken = payload.sub;
        const userIdToEdit = req.params.id;
        if (!userIdToEdit) {
            throw new common_1.UnauthorizedException('ID de usuario no proporcionado');
        }
        if (userIdFromToken !== userIdToEdit) {
            throw new common_1.UnauthorizedException('No puedes editar un usuario que no eres tú');
        }
        return payload;
    }
};
exports.JwtOwnerStrategy = JwtOwnerStrategy;
exports.JwtOwnerStrategy = JwtOwnerStrategy = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], JwtOwnerStrategy);
let JwtOrderOwnerStrategy = class JwtOrderOwnerStrategy extends (0, passport_1.PassportStrategy)(passport_jwt_1.Strategy, 'jwt-order-owner') {
    configService;
    constructor(configService) {
        super({
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromExtractors([
                (req) => req.cookies['jwt']
            ]),
            ignoreExpiration: false,
            passReqToCallback: true,
            secretOrKey: configService.get('JWT_SECRET'),
        });
        this.configService = configService;
    }
    async validate(req, payload) {
        const userIdFromToken = payload.sub;
        const order = req.body;
        if (!req.body)
            throw new common_1.UnauthorizedException('Informacion no proporcionada');
        if (userIdFromToken !== order.userId) {
            throw new common_1.UnauthorizedException('No puedes hacer un pedido en nombre de otro usuario');
        }
        return payload;
    }
};
exports.JwtOrderOwnerStrategy = JwtOrderOwnerStrategy;
exports.JwtOrderOwnerStrategy = JwtOrderOwnerStrategy = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], JwtOrderOwnerStrategy);
//# sourceMappingURL=jwt-owner.strategy.js.map