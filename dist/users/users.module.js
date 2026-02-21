"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersModule = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("./users.service");
const users_controller_1 = require("./users.controller");
const prisma_service_1 = require("../shared/services/prisma/prisma.service");
const users_repository_1 = require("./users.repository");
const jwt_strategy_1 = require("../shared/services/jwt/jwt.strategy");
const auth_guard_1 = require("../shared/guards/auth.guard");
const config_1 = require("@nestjs/config");
const jwt_owner_strategy_1 = require("../shared/services/jwt/jwt-owner.strategy");
const owner_guard_1 = require("../shared/guards/owner.guard");
const cloudinary_service_1 = require("../cloudinary/cloudinary.service");
let UsersModule = class UsersModule {
};
exports.UsersModule = UsersModule;
exports.UsersModule = UsersModule = __decorate([
    (0, common_1.Module)({
        controllers: [users_controller_1.UsersController],
        imports: [],
        providers: [cloudinary_service_1.CloudinaryService, config_1.ConfigService, users_service_1.UsersService, prisma_service_1.PrismaService, users_repository_1.UsersRepository, jwt_strategy_1.JwtStrategy, auth_guard_1.JwtAuthGuard, jwt_owner_strategy_1.JwtOwnerStrategy, owner_guard_1.OwnerGuard],
    })
], UsersModule);
//# sourceMappingURL=users.module.js.map