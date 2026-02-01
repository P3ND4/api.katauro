import { PromotionService } from './promotion.service';
import { CreatePromotionDto } from './dto/create-promotion.dto';
import { UpdatePromotionDto } from './dto/update-promotion.dto';
import { UpdateBannerDto } from './dto/update-banner.dto';
import { UpdateCarouselDto } from './dto/update-carousel.dto';
export declare class PromotionController {
    private readonly promotionService;
    constructor(promotionService: PromotionService);
    create(createPromotionDto: CreatePromotionDto): Promise<Promotion>;
    findAll(): Promise<Promotion[]>;
    findBanner(id: string): Promise<any>;
    findCarousel(id: string): Promise<any>;
    findAllCarousel(): Promise<Carousel[]>;
    updateBanner(id: string, data: UpdateBannerDto): Promise<Banner>;
    updateCarousel(id: string, data: UpdateCarouselDto): void;
    findOne(id: string): Promise<any>;
    update(id: string, updatePromotionDto: UpdatePromotionDto): Promise<Promotion>;
    remove(id: string): Promise<Promotion>;
}
