"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarouselRepository = void 0;
class CarouselRepository {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    FindAllCarousel() {
        return this.prisma.carousel.findMany({ include: { banners: true } });
    }
    FindCarouselById(id) {
        return this.prisma.carousel.findUnique({ where: { id } });
    }
    DeleteCarousel(id) {
        return this.prisma.carousel.delete({ where: { id } });
    }
    UpdateCarousel(id, data) {
        return this.prisma.carousel.update({ where: { id }, data });
    }
    CreateCarousel(data) {
        return this.prisma.carousel.create({ data });
    }
    seedBaseCarousel(name) {
        return this.prisma.carousel.upsert({
            where: { name: name }, update: {}, create: { name }
        });
    }
}
exports.CarouselRepository = CarouselRepository;
//# sourceMappingURL=Carousel.repository.js.map