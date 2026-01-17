"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromotionRepository = void 0;
class PromotionRepository {
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
                promo_id: data.promo_id,
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
                promo_id: data.promo_id,
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
}
exports.PromotionRepository = PromotionRepository;
//# sourceMappingURL=Promotion.repository.js.map