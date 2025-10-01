import { Images } from "generated/prisma";

export class Product {
    id: string;
    name: string;
    categoryId: string
    description?: string;
    subtitle: string
    vector?: string
    category: CatEntity;
    variants: Variant[];
}

export class Variant {
    id: string;
    variantName: String;
    colorId: string;
    price: number;
    stock: number;
    image?: string;
    images: Images[]
    color: Color
}

export enum Categories {
    tableLumin = "Luminarias de mesa",
    wallLumin = "Luminarias de pared",
    footLumin = "Luminarias de pie",
    roofLumin = "Luminarias de techo",
    lightBulb = "Bombillo",
    other = "Otras"
}

export class CatEntity {
    nombre: string
    id: string
}

export class Finish {
    id: string
    text: string
    image?: string
}

export class Color {
    id: string
    text: string
    image?: string
}