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
exports.PromotionRepository = void 0;
const prisma_service_1 = require("../shared/services/prisma/prisma.service");
const common_1 = require("@nestjs/common");
let PromotionRepository = class PromotionRepository {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    FindAllPromotions() {
        return this.prisma.promotion.findMany({ include: { products: true } });
    }
    FindPromoById(id) {
        return this.prisma.promotion.findUnique({ where: { promo_id: id }, include: { products: true, categories: { include: { category: true } } } });
    }
    DeletePromotion(id) {
        return this.prisma.promotion.delete({ where: { promo_id: id } });
    }
    async UpdatePromotion(id, data) {
        if (data.products) {
            await this.prisma.productForPromotion.deleteMany({ where: { promotionId: id } });
        }
        if (data.categories) {
            await this.prisma.categoryforPromo.deleteMany({ where: { promoId: id } });
        }
        return this.prisma.promotion.update({
            where: { promo_id: id }, data: {
                discount: data.discount,
                startDate: data.startDate,
                endDate: data.endDate,
                name: data.name,
                discountType: data.discountType,
                Type: data.Type,
                products: data.products ? {
                    createMany: {
                        data: data.products.map(productId => ({ productId: productId }))
                    }
                } : undefined
            }
        });
    }
    CreatePromotion(data) {
        return this.prisma.promotion.create({
            data: {
                discount: data.discount,
                startDate: data.startDate,
                endDate: data.endDate,
                name: data.name,
                discountType: data.discountType,
                Type: data.Type,
                products: {
                    createMany: {
                        data: data.products.map(productId => ({ productId: productId }))
                    }
                },
                categories: {
                    createMany: {
                        data: data.categories.map(categoryId => ({ categoryId: categoryId }))
                    }
                }
            }
        });
    }
};
exports.PromotionRepository = PromotionRepository;
exports.PromotionRepository = PromotionRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PromotionRepository);
//# sourceMappingURL=Promotion.repository.js.map