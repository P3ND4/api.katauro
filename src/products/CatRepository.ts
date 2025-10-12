import { PrismaService } from "src/prisma/prisma.service";
import { CatEntity, Finish } from "./entities/product.entity";
import { IPropiertiesRepository } from "./repositorys/IPropiertiesRepository";

export class propRepository implements IPropiertiesRepository {
    constructor(private prisma: PrismaService) { }
    findFinishes(): Promise<Finish[]> {
        return this.prisma.finish.findMany();
    }
    addFinish(data: { text: string, image: string }): Promise<Finish> {
        return this.prisma.finish.create({ data });
    }
    deleteFinish(id: string): Promise<Finish> {
        return this.prisma.finish.delete({ where: { id: id } })
    }
    findCategories(): Promise<CatEntity[]> {
        return this.prisma.category.findMany() as Promise<CatEntity[]>;
    }

}