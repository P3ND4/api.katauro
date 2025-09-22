import { PrismaService } from "src/prisma/prisma.service";
import { CatEntity } from "./entities/product.entity";
import { ICategoryRepository } from "./repositorys/ICategoryRepository";
export declare class catRepository implements ICategoryRepository {
    private prisma;
    constructor(prisma: PrismaService);
    findCategories(): Promise<CatEntity[]>;
}
