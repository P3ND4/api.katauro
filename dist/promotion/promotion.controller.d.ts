import { PromotionService } from './promotion.service';
import { CreatePromotionDto } from './dto/create-promotion.dto';
import { UpdatePromotionDto } from './dto/update-promotion.dto';
import { UpdateBannerDto } from './dto/update-banner.dto';
import { UpdateCarouselDto } from './dto/update-carousel.dto';
export declare class PromotionController {
    private readonly promotionService;
    constructor(promotionService: PromotionService);
    create(createPromotionDto: CreatePromotionDto): Promise<{
        name: string;
        promo_id: string;
        startDate: Date;
        endDate: Date;
        discountType: string;
        Type: string;
        discount: number;
    }>;
    findAll(): Promise<{
        name: string;
        promo_id: string;
        startDate: Date;
        endDate: Date;
        discountType: string;
        Type: string;
        discount: number;
    }[]>;
    findBanner(id: string): Promise<{
        name: string;
        image: string;
        id: number;
        publicId: string | null;
        prodId: string;
        description: string;
        carouselId: number;
    } | null>;
    findCarousel(id: string): Promise<{
        name: string;
        id: number;
    } | null>;
    findAllCarousel(): Promise<{
        name: string;
        id: number;
    }[]>;
    updateBanner(id: string, data: UpdateBannerDto): Promise<{
        name: string;
        image: string;
        id: number;
        publicId: string | null;
        prodId: string;
        description: string;
        carouselId: number;
    }>;
    updateCarousel(id: string, data: UpdateCarouselDto): void;
    findOne(id: string): Promise<{
        name: string;
        promo_id: string;
        startDate: Date;
        endDate: Date;
        discountType: string;
        Type: string;
        discount: number;
    } | null>;
    update(id: string, updatePromotionDto: UpdatePromotionDto): Promise<{
        name: string;
        promo_id: string;
        startDate: Date;
        endDate: Date;
        discountType: string;
        Type: string;
        discount: number;
    }>;
    remove(id: string): Promise<{
        name: string;
        promo_id: string;
        startDate: Date;
        endDate: Date;
        discountType: string;
        Type: string;
        discount: number;
    }>;
}
