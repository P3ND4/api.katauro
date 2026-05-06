export class CreateSpecProductDTO {
    id?: string;
    price: number;
    stock: number;
    colorId: string
    image: string;
    images: { link: string, public_id?: string }[];
    models3D: { url: string, public_id?: string }[];
    genericId: string;
}