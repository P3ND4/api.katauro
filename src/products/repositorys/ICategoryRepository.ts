import { Category } from "generated/prisma";
import { Categories, CatEntity } from "../entities/product.entity";

export interface ICategoryRepository{
    findCategories(): Promise<CatEntity[]>;
}