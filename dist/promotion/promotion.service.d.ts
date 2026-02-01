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
    create(createPromotionDto: CreatePromotionDto): Promise<Promotion>;
    findAll(): Promise<Promotion[]>;
    findOne(id: string): Promise<any>;
    update(id: string, updatePromotionDto: UpdatePromotionDto): Promise<Promotion>;
    remove(id: string): Promise<Promotion>;
    findBanner(id: number): Promise<any>;
    findCarousel(id: number): Promise<any>;
    findAllCarousels(): Promise<Carousel[]>;
    updateBanner(id: number, data: any): Promise<Banner>;
}
