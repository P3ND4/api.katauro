import { Images } from "generated/prisma";
import { Promotion } from "src/promotion/entities/promotion.entity";
export declare class Product {
    id: string;
    name: string;
    categoryId: string;
    finish?: FinishForProduct[];
    description?: string;
    subtitle: string;
    vector?: string;
    vPublicId?: string;
    category?: CatEntity;
    variants?: Variant[];
    typology: Typology;
}
export declare class Variant {
    id: string;
    colorId: string;
    price: number;
    position: number;
    stock: number;
    image?: string;
    images: Images[];
    color: Color;
    genericId: string;
    genericProd?: Product;
    promotions: {
        productId: string;
        promotionId: string;
        promotion: Promotion;
    }[];
}
export declare class FinishForProduct {
    productId: string;
    finishId: string;
}
export declare enum Categories {
    tableLumin = "Luminarias de mesa",
    wallLumin = "Luminarias de pared",
    footLumin = "Luminarias de pie",
    roofLumin = "Luminarias de techo",
    lightBulb = "Accesorios",
    other = "Otras"
}
export declare class CatEntity {
    nombre: string;
    id: string;
}
export declare class Finish {
    id: string;
    text: string;
    image: string;
}
export declare class Color {
    id: string;
    name: string;
    image?: string;
}
export declare enum Typology {
    simple = "Simple",
    variant = "Variante"
}
