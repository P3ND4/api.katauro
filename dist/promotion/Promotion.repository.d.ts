import { Promotion } from "generated/prisma";
import { CreatePromotionDto } from "./dto/create-promotion.dto";
import { UpdatePromotionDto } from "./dto/update-promotion.dto";
import { IPromoRepository } from "./repositories/IPromo.repository";
import { PrismaService } from "src/shared/services/prisma/prisma.service";
export declare class PromotionRepository implements IPromoRepository {
    private prisma;
    constructor(prisma: PrismaService);
    FindAllPromotions(): Promise<Promotion[]>;
    FindPromoById(id: string): Promise<Promotion | null>;
    DeletePromotion(id: string): Promise<Promotion>;
    UpdatePromotion(id: string, data: UpdatePromotionDto): Promise<Promotion>;
    CreatePromotion(data: CreatePromotionDto): Promise<Promotion>;
}
