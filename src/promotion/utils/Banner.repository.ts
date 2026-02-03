import { PrismaService } from "src/shared/services/prisma/prisma.service";
import { CreateBannerDto } from "../dto/create-banner.dto";
import { UpdateBannerDto } from "../dto/update-banner.dto";

import { IBannerRepository } from "../repositories/IBanner.repository";
import { PromoBanner as Banner } from "generated/prisma";
import { create } from "domain";
import { Injectable } from "@nestjs/common";
import { CarouselNames } from "../entities/promotion.entity";
@Injectable()
export class BannerRepository implements IBannerRepository {
    constructor(private prisma: PrismaService) { }
    FindAllBanners(): Promise<Banner[]> {
        return this.prisma.promoBanner.findMany({ include: { product: { include: { promotions: { include: { promotion: true } } } } } })
    }
    FindBannerById(id: number): Promise<Banner | null> {
        return this.prisma.promoBanner.findUnique({ where: { id }, include: { product: { include: {genericProd: true , promotions: { include: { promotion: true } } } } } })
    }
    DeleteBanner(id: number): Promise<Banner> {
        return this.prisma.promoBanner.delete({ where: { id } });
    }
    UpdateBanner(id: number, data: UpdateBannerDto): Promise<Banner> {
        return this.prisma.promoBanner.update({ where: { id }, data });
    }
    CreateBanner(data: CreateBannerDto): Promise<Banner> {
        return this.prisma.promoBanner.create({ data: data })
    }

    async bannerSeeds() {

        const carIds = [1, 1, 1, 2, 2, 2]

        var banners = []
        let id = 1
        carIds.forEach(async i => {
            const bann =
            {
                id: id,
                name: '',
                description: '',
                prodId: null,
                image: "",
                carouselId: i
            }
            id += 1
            await this.prisma.promoBanner.upsert({ create: bann, update: {}, where: { id: bann.id } })

        })
    }

}