"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const users_service_1 = require("../users/users.service");
const bcrypt = __importStar(require("bcrypt"));
const crypto_1 = require("crypto");
const revokedJwt_service_1 = require("../shared/services/jwt/revokedJwt.service");
const mail_service_1 = require("../shared/services/mail/mail.service");
let AuthService = class AuthService {
    userService;
    jwtService;
    revokedJwtService;
    mailService;
    constructor(userService, jwtService, revokedJwtService, mailService) {
        this.userService = userService;
        this.jwtService = jwtService;
        this.revokedJwtService = revokedJwtService;
        this.mailService = mailService;
    }
    async register(createUserDto) {
        return this.userService.create(createUserDto);
    }
    async login(credentials) {
        const { email, password } = credentials;
        const user = await this.userService.findUserByEmail(email);
        if (!user) {
            throw new common_1.UnauthorizedException('No existe usuario con ese email');
        }
        if (!user || !(await bcrypt.compare(password, user.password))) {
            throw new common_1.UnauthorizedException('Contraseña incorrecta');
        }
        return this.createToken(user);
    }
    createToken(user) {
        const payload = { email: user.email, sub: user.id, tid: crypto.randomUUID() };
        const accessToken = this.jwtService.sign(payload, { expiresIn: '72h' });
        return { access_token: accessToken };
    }
    async validateUser(email, password) {
        const user = await this.userService.findUserByEmail(email);
        if (!user)
            return null;
        const passwordValid = await bcrypt.compare(password, user.password);
        if (!passwordValid)
            return null;
        return user;
    }
    async getLoggedUser(token) {
        if (!token)
            throw new common_1.UnauthorizedException('Not logged in');
        try {
            const payload = this.jwtService.verify(token, { secret: process.env.JWT_SECRET });
            if (await this.revokedJwtService.isTokenRevoked(payload.tid))
                throw new common_1.UnauthorizedException('Not logged in');
            const user = await this.userService.findOne(payload.sub);
            if (!user)
                throw new common_1.UnauthorizedException();
            const { password, ...userSafe } = user;
            return userSafe;
        }
        catch (err) {
            throw err;
        }
    }
    async logout(token) {
        if (!token || await this.revokedJwtService.isTokenRevoked(token))
            throw new common_1.UnauthorizedException('Not logged in');
        try {
            const payload = this.jwtService.verify(token, { secret: process.env.JWT_SECRET });
            const expTimestamp = payload.exp;
            const expirationDate = new Date(expTimestamp * 1000);
            await this.revokedJwtService.revokeToken(token, expirationDate, payload.tid);
        }
        catch (err) {
            throw err;
        }
        return { message: 'Logout successful' };
    }
    async sendCode(email) {
        const user = await this.userService.findUserByEmail(email);
        if (!user)
            throw new common_1.BadRequestException('User not found');
        const code = this.generateOTP();
        const expires = new Date(Date.now() + 5 * 60 * 1000);
        await this.userService.update(user.id, {
            emailVerificationCode: code,
            emailVerificationExpires: expires
        });
        return this.mailService.sendVerification(user.email, code);
    }
    async verifyCode(email, code) {
        const user = await this.userService.findUserByEmail(email);
        if (!user)
            throw new common_1.BadRequestException('User not found');
        if (!user.emailVerificationCode || !user.emailVerificationExpires)
            throw new common_1.BadRequestException('No hay código pendiente');
        if (user.emailVerificationExpires < new Date())
            throw new common_1.BadRequestException('Código expirado');
        if (user.emailVerificationCode !== code)
            throw new common_1.BadRequestException('Código incorrecto');
        await this.userService.update(user.id, {
            emailVerified: true,
            emailVerificationCode: undefined,
            emailVerificationExpires: undefined,
        });
        return this.generateResetToken(user.id);
    }
    async changePassword(email, newPassword) {
        const user = await this.userService.findUserByEmail(email);
        if (!user)
            throw new common_1.BadRequestException('User not found');
        return this.userService.update(user.id, { password: newPassword });
    }
    generateOTP() {
        return (0, crypto_1.randomInt)(100000, 999999).toString();
    }
    generateResetToken(userId) {
        const payload = {
            sub: userId,
            purpose: 'reset-password',
        };
        return this.jwtService.sign(payload, {
            expiresIn: '10m',
        });
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UsersService, jwt_1.JwtService, revokedJwt_service_1.RevokedJwtService,
        mail_service_1.MailService])
], AuthService);
//# sourceMappingURL=auth.service.js.map