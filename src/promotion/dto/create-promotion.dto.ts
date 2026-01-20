export class CreatePromotionDto {
    promo_id: string
    startDate: Date
    endDate: Date
    name: string
    discountType: string
    Type: string
    categories: string[]
    products: string[]
    discount: number
}
