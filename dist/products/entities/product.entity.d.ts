export declare class Product {
    id: string;
    name: string;
    description?: string;
    categorie: Categories;
    price: number;
    stock: number;
    image?: string;
}
export declare enum Categories {
    tableLumin = "Luminarias de mesa",
    wallLumin = "Luminarias de pared",
    footLumin = "Luminarias de pie",
    roofLumin = "Luminarias de techo",
    lightBulb = "Bombillo",
    other = "Otras"
}
