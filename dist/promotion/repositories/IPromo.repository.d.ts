import { Promotion } from "generated/prisma";
import { UpdatePromotionDto } from "../dto/update-promotion.dto";
import { CreatePromotionDto } from "../dto/create-promotion.dto";
export interface IPromoRepository {
    FindAllPromotions(): Promise<Promotion[]>;
    FindPromoById(id: string): Promise<Promotion | null>;
    DeletePromotion(id: string): Promise<Promotion>;
    UpdatePromotion(id: string, data: UpdatePromotionDto): Promise<Promotion>;
    CreatePromotion(data: CreatePromotionDto): Promise<Promotion>;
}
