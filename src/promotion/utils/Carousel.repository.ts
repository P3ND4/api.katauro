import { PrismaService } from "src/shared/services/prisma/prisma.service";
import { CreateCarouselDto } from "../dto/create-carousel.dto";
import { UpdateCarouselDto } from "../dto/update-carousel.dto";

import { ICarouselRepository } from "../repositories/ICarousel.repository";
import { Carousel } from "generated/prisma";
import { Injectable } from "@nestjs/common";
@Injectable()
export class CarouselRepository implements ICarouselRepository {

    constructor(private prisma: PrismaService) { }

    FindAllCarousel(): Promise<Carousel[]> {
        return this.prisma.carousel.findMany({ include: { banners: { include: { product: { include: { genericProd: true, promotions: { include: { promotion: { include: { categories: true } } } } } } } } } });
    }
    FindCarouselById(id: number): Promise<Carousel | null> {
        return this.prisma.carousel.findUnique({ where: { id } });
    }
    DeleteCarousel(id: number): Promise<Carousel> {
        return this.prisma.carousel.delete({ where: { id } });
    }
    UpdateCarousel(id: number, data: UpdateCarouselDto): Promise<Carousel> {
        return this.prisma.carousel.update({ where: { id }, data });
    }
    CreateCarousel(data: CreateCarouselDto): Promise<Carousel> {
        return this.prisma.carousel.create({ data });
    }

    seedBaseCarousel(name: string) {
        return this.prisma.carousel.upsert({
            where: { name: name }, update: {}, create: { name }
        });
    }
}