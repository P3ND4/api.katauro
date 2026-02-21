import { Injectable, OnModuleInit } from '@nestjs/common';
import { CreatePromotionDto } from './dto/create-promotion.dto';
import { UpdatePromotionDto } from './dto/update-promotion.dto';
import { PromotionRepository } from './Promotion.repository';
import { BannerRepository } from './utils/Banner.repository';
import { CarouselRepository } from './utils/Carousel.repository';
import { Banner, CarouselNames } from './entities/promotion.entity';
import { UpdateBannerDto } from './dto/update-banner.dto';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';
import { isUndefined } from 'util';


@Injectable()
export class PromotionService implements OnModuleInit {

  constructor(private promoRep: PromotionRepository, private bannerRep: BannerRepository, private carouselRep: CarouselRepository, private cloudyServ: CloudinaryService) { }
  async onModuleInit() {
    await this.carouselRep.seedBaseCarousel(CarouselNames.primary)
    await this.carouselRep.seedBaseCarousel(CarouselNames.secundary)
    await this.bannerRep.bannerSeeds();
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

  async updateBanner(id: number, data: UpdateBannerDto) {
    let cloudyUpdate = data.publicId && data.image ? await this.cloudyServ.moveImage(data.publicId, data.image) : { link: data.image, public_id: undefined };
    [data.publicId, data.image] = [cloudyUpdate.public_id, cloudyUpdate.link];
    return this.bannerRep.UpdateBanner(id, data);
  }


}
