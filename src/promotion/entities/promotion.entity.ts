import { CatEntity, Variant } from "src/products/entities/product.entity"

export class Promotion {
    promo_id: string
    startDate: Date
    endDate: Date
    name: string
    discountType: string
    Type: string
    categories: {
        promoId: string,
        categoryId: string,
        category: CatEntity

    }[]
    products: {
        productId: string
        promotionId: string
        product: Variant
    }[]
}


export class Banner {
    id: number
    name: string
    description: string
    prodId: string
    product: Variant
    image: string
    publicId?: string
    carouselId: number
    carousel: Carousel

}

export class Carousel {
    id: number
    name: string
    banners: Banner[]
}