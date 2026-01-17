import { Injectable, OnModuleInit } from '@nestjs/common';
import { CreatePromotionDto } from './dto/create-promotion.dto';
import { UpdatePromotionDto } from './dto/update-promotion.dto';
import { PromotionRepository } from './Promotion.repository';
import { BannerRepository } from './utils/Banner.repository';
import { CarouselRepository } from './utils/Carousel.repository';

@Injectable()
export class PromotionService implements OnModuleInit {

  constructor(private promoRep: PromotionRepository, private bannerRep: BannerRepository, private carouselRep: CarouselRepository) { }
  onModuleInit() {
    throw new Error('Method not implemented.');
  }

  create(createPromotionDto: CreatePromotionDto) {
    return this.promoRep.CreatePromotion(createPromotionDto);
  }

  findAll() {
    return this.promoRep.FindAllPromotions();
  }

  findOne(id: string) {
    return this.promoRep.FindPromoById(id);
  }

  update(id: string, updatePromotionDto: UpdatePromotionDto) {
    return this.promoRep.UpdatePromotion(id, updatePromotionDto);
  }

  remove(id: string) {
    return this.promoRep.DeletePromotion(id);
  }

  findBanner(id: number) {
    return this.bannerRep.FindBannerById(id);
  }

  findCarousel(id: number) {
    return this.carouselRep.FindCarouselById(id);
  }

  findAllCarousels() {
    return this.carouselRep.FindAllCarousel();
  }

  updateBanner(id: number, data: any) {
    return this.bannerRep.UpdateBanner(id, data);
  }

  
}
