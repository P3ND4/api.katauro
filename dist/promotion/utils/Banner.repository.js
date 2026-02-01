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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.BannerRepository = void 0;
const prisma_service_1 = require("../../../../../../../../../src/shared/services/prisma/prisma.service");
const common_1 = require("@nestjs/common");
let BannerRepository = class BannerRepository {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    FindAllBanners() {
        return this.prisma.promoBanner.findMany({ include: { product: { include: { promotions: { include: { promotion: true } } } } } });
    }
    FindBannerById(id) {
        return this.prisma.promoBanner.findUnique({ where: { id }, include: { product: { include: { promotions: { include: { promotion: true } } } } } });
    }
    DeleteBanner(id) {
        return this.prisma.promoBanner.delete({ where: { id } });
    }
    UpdateBanner(id, data) {
        return this.prisma.promoBanner.update({ where: { id }, data });
    }
    CreateBanner(data) {
        return this.prisma.promoBanner.create({ data: data });
    }
    async bannerSeeds() {
        const carIds = [1, 1, 1, 2, 2, 2];
        var banners = [];
        let id = 1;
        carIds.forEach(async (i) => {
            const bann = {
                id: id,
                name: '',
                description: '',
                prodId: null,
                image: "",
                carouselId: i
            };
            id += 1;
            await this.prisma.promoBanner.upsert({ create: bann, update: {}, where: { id: bann.id } });
        });
    }
};
exports.BannerRepository = BannerRepository;
exports.BannerRepository = BannerRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof prisma_service_1.PrismaService !== "undefined" && prisma_service_1.PrismaService) === "function" ? _a : Object])
], BannerRepository);
//# sourceMappingURL=Banner.repository.js.map