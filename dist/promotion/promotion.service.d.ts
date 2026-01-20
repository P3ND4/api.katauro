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
    onModuleInit(): void;
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
    findBanner(id: number): Promise<{
        name: string;
        image: string;
        id: number;
        publicId: string | null;
        prodId: string;
        description: string;
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
        image: string;
        id: number;
        publicId: string | null;
        prodId: string;
        description: string;
        carouselId: number;
    }>;
}
