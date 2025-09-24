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

export class Variant{
    id: string;
    variantName: String;
    color?: string;
    price: number;
    stock: number;
    image?: string;
    images: Images[]
}

export enum Categories{
    tableLumin = "Luminarias de mesa",
    wallLumin = "Luminarias de pared",
    footLumin = "Luminarias de pie",
    roofLumin = "Luminarias de techo",
    lightBulb = "Bombillo",
    other = "Otras"
}

export class CatEntity{
    nombre: string
    id: string
}