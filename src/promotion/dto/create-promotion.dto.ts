export class CreatePromotionDto {
    startDate: Date
    endDate: Date
    name: string
    description: string
    discountType: string
    Type: string
    categories: string[]
    products: string[]
    discount: number
}
