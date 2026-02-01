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
        discount: number;
        Type: string;
    }>;
    findAll(): Promise<{
        name: string;
        promo_id: string;
        startDate: Date;
        endDate: Date;
        discountType: string;
        discount: number;
        Type: string;
    }[]>;
    findBanner(id: string): Promise<{
        name: string;
        id: number;
        description: string;
        prodId: string | null;
        image: string;
        publicId: string | null;
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
        id: number;
        description: string;
        prodId: string | null;
        image: string;
        publicId: string | null;
        carouselId: number;
    }>;
    updateCarousel(id: string, data: UpdateCarouselDto): void;
    findOne(id: string): Promise<{
        name: string;
        promo_id: string;
        startDate: Date;
        endDate: Date;
        discountType: string;
        discount: number;
        Type: string;
    } | null>;
    update(id: string, updatePromotionDto: UpdatePromotionDto): Promise<{
        name: string;
        promo_id: string;
        startDate: Date;
        endDate: Date;
        discountType: string;
        discount: number;
        Type: string;
    }>;
    remove(id: string): Promise<{
        name: string;
        promo_id: string;
        startDate: Date;
        endDate: Date;
        discountType: string;
        discount: number;
        Type: string;
    }>;
}
