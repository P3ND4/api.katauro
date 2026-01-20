"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Carousel = exports.Banner = exports.Promotion = void 0;
class Promotion {
    promo_id;
    startDate;
    endDate;
    name;
    discountType;
    Type;
    discount;
    categories;
    products;
}
exports.Promotion = Promotion;
class Banner {
    id;
    name;
    description;
    prodId;
    product;
    image;
    publicId;
    carouselId;
    carousel;
}
exports.Banner = Banner;
class Carousel {
    id;
    name;
    banners;
}
exports.Carousel = Carousel;
//# sourceMappingURL=promotion.entity.js.map