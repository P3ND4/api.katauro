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
        description: string;
        startDate: Date;
        endDate: Date;
        discountType: string;
        Type: string;
        discount: number;
        promo_id: string;
    }>;
    findAll(): Promise<{
        name: string;
        description: string;
        startDate: Date;
        endDate: Date;
        discountType: string;
        Type: string;
        discount: number;
        promo_id: string;
    }[]>;
    findBanner(id: string): Promise<{
        name: string;
        image: string;
        publicId: string | null;
        id: number;
        prodId: string | null;
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
        publicId: string | null;
        id: number;
        prodId: string | null;
        description: string;
        carouselId: number;
    }>;
    updateCarousel(id: string, data: UpdateCarouselDto): void;
    findOne(id: string): Promise<{
        name: string;
        description: string;
        startDate: Date;
        endDate: Date;
        discountType: string;
        Type: string;
        discount: number;
        promo_id: string;
    } | null>;
    update(id: string, updatePromotionDto: UpdatePromotionDto): Promise<{
        name: string;
        description: string;
        startDate: Date;
        endDate: Date;
        discountType: string;
        Type: string;
        discount: number;
        promo_id: string;
    }>;
    remove(id: string): Promise<{
        name: string;
        description: string;
        startDate: Date;
        endDate: Date;
        discountType: string;
        Type: string;
        discount: number;
        promo_id: string;
    }>;
}
