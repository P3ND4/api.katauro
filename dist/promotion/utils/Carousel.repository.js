"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarouselRepository = void 0;
const prisma_service_1 = require("../../shared/services/prisma/prisma.service");
const common_1 = require("@nestjs/common");
let CarouselRepository = class CarouselRepository {
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
};
exports.CarouselRepository = CarouselRepository;
exports.CarouselRepository = CarouselRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CarouselRepository);
//# sourceMappingURL=Carousel.repository.js.map