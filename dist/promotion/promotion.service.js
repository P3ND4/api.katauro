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
exports.PromotionService = void 0;
const common_1 = require("@nestjs/common");
const Promotion_repository_1 = require("./Promotion.repository");
const Banner_repository_1 = require("./utils/Banner.repository");
const Carousel_repository_1 = require("./utils/Carousel.repository");
let PromotionService = class PromotionService {
    promoRep;
    bannerRep;
    carouselRep;
    constructor(promoRep, bannerRep, carouselRep) {
        this.promoRep = promoRep;
        this.bannerRep = bannerRep;
        this.carouselRep = carouselRep;
    }
    onModuleInit() {
    }
    create(createPromotionDto) {
        return this.promoRep.CreatePromotion(createPromotionDto);
    }
    findAll() {
        return this.promoRep.FindAllPromotions();
    }
    findOne(id) {
        return this.promoRep.FindPromoById(id);
    }
    update(id, updatePromotionDto) {
        return this.promoRep.UpdatePromotion(id, updatePromotionDto);
    }
    remove(id) {
        return this.promoRep.DeletePromotion(id);
    }
    findBanner(id) {
        return this.bannerRep.FindBannerById(id);
    }
    findCarousel(id) {
        return this.carouselRep.FindCarouselById(id);
    }
    findAllCarousels() {
        return this.carouselRep.FindAllCarousel();
    }
    updateBanner(id, data) {
        return this.bannerRep.UpdateBanner(id, data);
    }
};
exports.PromotionService = PromotionService;
exports.PromotionService = PromotionService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [Promotion_repository_1.PromotionRepository, Banner_repository_1.BannerRepository, Carousel_repository_1.CarouselRepository])
], PromotionService);
//# sourceMappingURL=promotion.service.js.map