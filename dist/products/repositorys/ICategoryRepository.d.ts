import { CatEntity } from "../entities/product.entity";
export interface ICategoryRepository {
    findCategories(): Promise<CatEntity[]>;
}
