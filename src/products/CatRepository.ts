import { PrismaService } from "src/prisma/prisma.service";
import { CatEntity } from "./entities/product.entity";
import { ICategoryRepository } from "./repositorys/ICategoryRepository";

export class catRepository implements ICategoryRepository{
    constructor(private prisma: PrismaService){}
    findCategories(): Promise<CatEntity[]> {
        return this.prisma.category.findMany() as Promise<CatEntity[]>;
    }

}