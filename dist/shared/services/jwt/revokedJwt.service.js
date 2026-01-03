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
exports.RevokedJwtService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../../prisma/prisma.service");
let RevokedJwtService = class RevokedJwtService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async revokeToken(token, expiresAt, tid) {
        return this.prisma.tokenBlacklist.create({
            data: {
                token,
                expiresAt,
                tid
            }
        });
    }
    async isTokenRevoked(tid) {
        var blacklist = (await this.prisma.tokenBlacklist.findMany());
        const record = blacklist.find(x => x.tid === tid);
        return !!record;
    }
};
exports.RevokedJwtService = RevokedJwtService;
exports.RevokedJwtService = RevokedJwtService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], RevokedJwtService);
//# sourceMappingURL=revokedJwt.service.js.map