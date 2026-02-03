import { PrismaService } from "src/shared/services/prisma/prisma.service";
import { CreateCarouselDto } from "../dto/create-carousel.dto";
import { UpdateCarouselDto } from "../dto/update-carousel.dto";
import { ICarouselRepository } from "../repositories/ICarousel.repository";
import { Carousel } from "generated/prisma";
export declare class CarouselRepository implements ICarouselRepository {
    private prisma;
    constructor(prisma: PrismaService);
    FindAllCarousel(): Promise<Carousel[]>;
    FindCarouselById(id: number): Promise<Carousel | null>;
    DeleteCarousel(id: number): Promise<Carousel>;
    UpdateCarousel(id: number, data: UpdateCarouselDto): Promise<Carousel>;
    CreateCarousel(data: CreateCarouselDto): Promise<Carousel>;
    seedBaseCarousel(name: string): import("generated/prisma").Prisma.Prisma__CarouselClient<{
        name: string;
        id: number;
    }, never, import("generated/prisma/runtime/library").DefaultArgs, import("generated/prisma").Prisma.PrismaClientOptions>;
}
