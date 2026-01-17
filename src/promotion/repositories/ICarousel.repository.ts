import { Carousel } from "generated/prisma";
import { CreateCarouselDto } from "../dto/create-carousel.dto";
import { UpdateCarouselDto } from "../dto/update-carousel.dto";


export interface ICarouselRepository {
    FindAllCarousel(): Promise<Carousel[]>;
    FindCarouselById(id: number): Promise<Carousel | null>
    DeleteCarousel(id: number): Promise<Carousel>
    UpdateCarousel(id: number, data: UpdateCarouselDto): Promise<Carousel>
    CreateCarousel(data: CreateCarouselDto): Promise<Carousel>
}