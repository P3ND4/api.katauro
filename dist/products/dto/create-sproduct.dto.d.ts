export declare class CreateSpecProductDTO {
    id?: string;
    price: number;
    stock: number;
    colorId: string;
    image: string;
    images: {
        link: string;
        public_id?: string;
    }[];
}
