import { PrismaService } from "src/prisma/prisma.service";
import { CatEntity, Color, Finish } from "./entities/product.entity";
import { IPropiertiesRepository } from "./repositorys/IPropiertiesRepository";
export declare class propRepository implements IPropiertiesRepository {
    private prisma;
    constructor(prisma: PrismaService);
    findColors(): Promise<Color[]>;
    addColor(data: {
        image: string;
        name: string;
    }): Promise<Color>;
    deleteColor(id: string): Promise<Color>;
    findFinishes(): Promise<Finish[]>;
    addFinish(data: {
        text: string;
        image: string;
    }): Promise<Finish>;
    deleteFinish(id: string): Promise<Finish>;
    findCategories(): Promise<CatEntity[]>;
}
