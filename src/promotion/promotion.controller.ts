import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { PromotionService } from './promotion.service';
import { CreatePromotionDto } from './dto/create-promotion.dto';
import { UpdatePromotionDto } from './dto/update-promotion.dto';
import { UpdateBannerDto } from './dto/update-banner.dto';
import { UpdateCarouselDto } from './dto/update-carousel.dto';
import { AdminGuard } from 'src/shared/guards/admin/admin.guard';

@Controller('promotion')
export class PromotionController {
  constructor(private readonly promotionService: PromotionService) { }

  @UseGuards(AdminGuard)
  @Post()
  create(@Body() createPromotionDto: CreatePromotionDto) {
    return this.promotionService.create(createPromotionDto);
  }

  @Get()
  findAll() {
    return this.promotionService.findAll();
  }


  @Get('banners/:id')
  findBanner(@Param('id') id: string) {
    return this.promotionService.findBanner(Number(id));
  }


  @Get('carousel/:id')
  findCarousel(@Param('id') id: string) {
    return this.promotionService.findCarousel(Number(id));
  }

  @Get('carousel')
  findAllCarousel() {
    return this.promotionService.findAllCarousels();
  }


  @UseGuards(AdminGuard)
  @Patch('banner/:id')
  updateBanner(@Param('id') id: string, @Body() data: UpdateBannerDto) {
    return this.promotionService.updateBanner(Number(id), data);
  }


  @UseGuards(AdminGuard)
  @Patch('carousel/:id')
  updateCarousel(@Param('id') id: string, @Body() data: UpdateCarouselDto) { }


  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.promotionService.findOne(id);
  }

  @UseGuards(AdminGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePromotionDto: UpdatePromotionDto) {
    return this.promotionService.update(id, updatePromotionDto);
  }

  @UseGuards(AdminGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.promotionService.remove(id);
  }

}
