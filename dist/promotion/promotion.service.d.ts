import { OnModuleInit } from '@nestjs/common';
import { CreatePromotionDto } from './dto/create-promotion.dto';
import { UpdatePromotionDto } from './dto/update-promotion.dto';
import { PromotionRepository } from './Promotion.repository';
import { BannerRepository } from './utils/Banner.repository';
import { CarouselRepository } from './utils/Carousel.repository';
export declare class PromotionService implements OnModuleInit {
    private promoRep;
    private bannerRep;
    private carouselRep;
    constructor(promoRep: PromotionRepository, bannerRep: BannerRepository, carouselRep: CarouselRepository);
    onModuleInit(): Promise<void>;
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
    findBanner(id: number): Promise<{
        name: string;
        id: number;
        description: string;
        prodId: string | null;
        image: string;
        publicId: string | null;
        carouselId: number;
    } | null>;
    findCarousel(id: number): Promise<{
        name: string;
        id: number;
    } | null>;
    findAllCarousels(): Promise<{
        name: string;
        id: number;
    }[]>;
    updateBanner(id: number, data: any): Promise<{
        name: string;
        id: number;
        description: string;
        prodId: string | null;
        image: string;
        publicId: string | null;
        carouselId: number;
    }>;
}
