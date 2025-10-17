import { PrismaService } from "src/prisma/prisma.service";
import { CatEntity, Color, Finish } from "./entities/product.entity";
import { IPropiertiesRepository } from "./repositorys/IPropiertiesRepository";
import { Injectable } from "@nestjs/common";


@Injectable()
export class propRepository implements IPropiertiesRepository {
    constructor(private prisma: PrismaService) { }

    findColors(): Promise<Color[]> {
        return this.prisma.color.findMany();
    }

    addColor(data: { image: string; name: string; }): Promise<Color> {
        return this.prisma.color.create({data});
    }

    deleteColor(id: string): Promise<Color> {
        return this.prisma.color.delete({where: {id:id}});
    }

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