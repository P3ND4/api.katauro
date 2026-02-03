import { Promotion } from "generated/prisma";
import { CreatePromotionDto } from "./dto/create-promotion.dto";
import { UpdatePromotionDto } from "./dto/update-promotion.dto";
import { IPromoRepository } from "./repositories/IPromo.repository";
import { PrismaService } from "src/shared/services/prisma/prisma.service";
import { Injectable } from "@nestjs/common";

@Injectable()
export class PromotionRepository implements IPromoRepository {

    constructor(private prisma: PrismaService) { }

    FindAllPromotions(): Promise<Promotion[]> {
        return this.prisma.promotion.findMany({ include: { products: true } });
    }
    FindPromoById(id: string): Promise<Promotion | null> {
        return this.prisma.promotion.findUnique({ where: { promo_id: id }, include: { products: { include: { product: { include: { genericProd: true } } } }, categories: { include: { category: true } } } });
    }
    DeletePromotion(id: string): Promise<Promotion> {
        return this.prisma.promotion.delete({ where: { promo_id: id } });
    }
    async UpdatePromotion(id: string, data: UpdatePromotionDto): Promise<Promotion> {
        if (data.products) {
            await this.prisma.productForPromotion.deleteMany({ where: { promotionId: id } })

        }
        if (data.categories) {
            await this.prisma.categoryforPromo.deleteMany({ where: { promoId: id } })
        }

        return this.prisma.promotion.update({
            where: { promo_id: id }, data:
            {
                discount: data.discount,
                startDate: data.startDate,
                endDate: data.endDate,
                name: data.name,
                description: data.description,
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
    CreatePromotion(data: CreatePromotionDto): Promise<Promotion> {
        return this.prisma.promotion.create({
            data:
            {
                discount: data.discount,
                startDate: data.startDate,
                endDate: data.endDate,
                description: data.description,
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