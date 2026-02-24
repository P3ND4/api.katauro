import { Module } from '@nestjs/common';
import { PromotionService } from './promotion.service';
import { PromotionController } from './promotion.controller';
import { PrismaService } from 'src/shared/services/prisma/prisma.service';
import { PromotionRepository } from './Promotion.repository';
import { BannerRepository } from './utils/Banner.repository';
import { CarouselRepository } from './utils/Carousel.repository';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [PromotionController],
  imports: [AuthModule],
  providers: [PromotionService, PrismaService, PromotionRepository, BannerRepository, CarouselRepository, CloudinaryService],
})
export class PromotionModule { }
