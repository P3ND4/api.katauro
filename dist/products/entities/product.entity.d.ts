import { Images } from "generated/prisma";
export declare class Product {
    id: string;
    name: string;
    categoryId: string;
    description?: string;
    subtitle: string;
    vector?: string;
    category: CatEntity;
    variants: Variant[];
}
export declare class Variant {
    id: string;
    name: string;
    price: number;
    stock: number;
    image?: string;
    images: Images[];
}
export declare enum Categories {
    tableLumin = "Luminarias de mesa",
    wallLumin = "Luminarias de pared",
    footLumin = "Luminarias de pie",
    roofLumin = "Luminarias de techo",
    lightBulb = "Bombillo",
    other = "Otras"
}
export declare class CatEntity {
    nombre: string;
    id: string;
}
