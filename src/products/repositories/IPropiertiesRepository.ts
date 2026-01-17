import { CatEntity, Color, Finish } from "../entities/product.entity";

export interface IPropiertiesRepository {
    findCategories(): Promise<CatEntity[]>;

    findFinishes(): Promise<Finish[]>;

    addFinish(data: { image: string, text: string }): Promise<Finish>

    deleteFinish(id: string): Promise<Finish>

    findColors(): Promise<Color[]>;

    addColor(data: { image: string, name: string }): Promise<Color>

    deleteColor(id: string): Promise<Color>

    seedBaseCategories(): Promise<void>;
}