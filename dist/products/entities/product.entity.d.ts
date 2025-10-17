import { Images } from "generated/prisma";
export declare class Product {
    id: string;
    name: string;
    categoryId: string;
    finish: Finish[];
    description?: string;
    subtitle: string;
    vector?: string;
    category: CatEntity;
    variants: Variant[];
    typology: Typology;
}
export declare class Variant {
    id: string;
    variantName: String;
    colorId: string;
    price: number;
    stock: number;
    image?: string;
    images: Images[];
    color: Color;
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
