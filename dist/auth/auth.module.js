"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("./auth.service");
const auth_controller_1 = require("./auth.controller");
const auth_guard_1 = require("../shared/guards/auth/auth.guard");
const jwt_strategy_1 = require("../shared/guards/auth/jwt.strategy");
const users_service_1 = require("../users/users.service");
const jwt_1 = require("@nestjs/jwt");
const config_1 = require("@nestjs/config");
const prisma_service_1 = require("../shared/services/prisma/prisma.service");
const users_repository_1 = require("../users/users.repository");
const revokedJwt_service_1 = require("../shared/services/jwt/revokedJwt.service");
const mail_service_1 = require("../shared/services/mail/mail.service");
const jwt_reset_strategy_1 = require("../shared/guards/reset/jwt-reset.strategy");
const cloudinary_service_1 = require("../cloudinary/cloudinary.service");
const owner_guard_1 = require("../shared/guards/ouwner/owner.guard");
const jwt_owner_strategy_1 = require("../shared/guards/ouwner/jwt-owner.strategy");
const reset_guard_1 = require("../shared/guards/reset/reset.guard");
const admin_guard_1 = require("../shared/guards/admin/admin.guard");
const jwt_admin_strategy_1 = require("../shared/guards/admin/jwt-admin.strategy");
let AuthModule = class AuthModule {
};
exports.AuthModule = AuthModule;
exports.AuthModule = AuthModule = __decorate([
    (0, common_1.Module)({
        controllers: [auth_controller_1.AuthController],
        imports: [
            config_1.ConfigModule.forRoot({ isGlobal: true }),
            jwt_1.JwtModule.registerAsync({
                imports: [config_1.ConfigModule],
                useFactory: async (configService) => ({
                    secret: configService.get('JWT_SECRET'),
                    signOptions: { expiresIn: '1h' },
                }),
                inject: [config_1.ConfigService],
            }),
        ],
        providers: [auth_service_1.AuthService, auth_guard_1.JwtAuthGuard,
            users_service_1.UsersService, jwt_strategy_1.JwtStrategy, jwt_reset_strategy_1.JwtResetStrategy,
            config_1.ConfigService, prisma_service_1.PrismaService, users_repository_1.UsersRepository,
            revokedJwt_service_1.RevokedJwtService, mail_service_1.MailService, cloudinary_service_1.CloudinaryService, owner_guard_1.OwnerGuard,
            jwt_owner_strategy_1.JwtOwnerStrategy, owner_guard_1.OrderOwnerGuard, jwt_owner_strategy_1.JwtOrderOwnerStrategy, admin_guard_1.AdminGuard,
            jwt_admin_strategy_1.JwtAdminStrategy, reset_guard_1.ResetGuard, jwt_reset_strategy_1.JwtResetStrategy],
        exports: [auth_guard_1.JwtAuthGuard, jwt_strategy_1.JwtStrategy, owner_guard_1.OwnerGuard,
            jwt_owner_strategy_1.JwtOwnerStrategy, jwt_reset_strategy_1.JwtResetStrategy, reset_guard_1.ResetGuard,
            admin_guard_1.AdminGuard, jwt_admin_strategy_1.JwtAdminStrategy, owner_guard_1.OrderOwnerGuard,
            jwt_owner_strategy_1.JwtOrderOwnerStrategy]
    })
], AuthModule);
//# sourceMappingURL=auth.module.js.map