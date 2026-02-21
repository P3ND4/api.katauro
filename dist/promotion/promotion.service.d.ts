import { OnModuleInit } from '@nestjs/common';
import { CreatePromotionDto } from './dto/create-promotion.dto';
import { UpdatePromotionDto } from './dto/update-promotion.dto';
import { PromotionRepository } from './Promotion.repository';
import { BannerRepository } from './utils/Banner.repository';
import { CarouselRepository } from './utils/Carousel.repository';
import { UpdateBannerDto } from './dto/update-banner.dto';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';
export declare class PromotionService implements OnModuleInit {
    private promoRep;
    private bannerRep;
    private carouselRep;
    private cloudyServ;
    constructor(promoRep: PromotionRepository, bannerRep: BannerRepository, carouselRep: CarouselRepository, cloudyServ: CloudinaryService);
    onModuleInit(): Promise<void>;
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
    findBanner(id: number): Promise<{
        name: string;
        image: string;
        publicId: string | null;
        id: number;
        prodId: string | null;
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
    updateBanner(id: number, data: UpdateBannerDto): Promise<{
        name: string;
        image: string;
        publicId: string | null;
        id: number;
        prodId: string | null;
        description: string;
        carouselId: number;
    }>;
}
