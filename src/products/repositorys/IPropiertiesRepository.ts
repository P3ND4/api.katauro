import { CatEntity, Finish } from "../entities/product.entity";

export interface IPropiertiesRepository{
    findCategories(): Promise<CatEntity[]>;

    findFinishes(): Promise<Finish[]>;

    addFinish(data: {image: string, text: string}): Promise<Finish>

    deleteFinish(id: string): Promise<Finish>
}