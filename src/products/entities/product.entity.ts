import { finishForProducts, Images } from "generated/prisma";
import { Promotion } from "src/promotion/entities/promotion.entity";
import { inherits } from "util";

export class Product {
    id: string;
    name: string;
    categoryId: string
    finish?: FinishForProduct[]
    description?: string;
    subtitle: string
    vector?: string
    category?: CatEntity;
    variants?: Variant[];
    typology: Typology;
}

export class Variant {
    id: string;
    colorId: string;
    price: number;
    stock: number;
    image?: string;
    images: Images[]
    color: Color
    genericId: string;
    genericProd?: Product;
    promotions: {
        productId: string
        promotionId: string
        promotion: Promotion
    }[]
}


export class FinishForProduct {
    productId: string;
    finishId: string;
}

export enum Categories {
    tableLumin = "Luminarias de mesa",
    wallLumin = "Luminarias de pared",
    footLumin = "Luminarias de pie",
    roofLumin = "Luminarias de techo",
    lightBulb = "Accesorios",
    other = "Otras"
}

export class CatEntity {
    nombre: string
    id: string
}

export class Finish {
    id: string
    text: string
    image: string
}

export class Color {
    id: string
    name: string
    image?: string
}

export enum Typology {
    simple = "Simple",
    variant = "Variante"
}