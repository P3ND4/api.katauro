import { PrismaService } from "src/shared/services/prisma/prisma.service";
import { CreateBannerDto } from "../dto/create-banner.dto";
import { UpdateBannerDto } from "../dto/update-banner.dto";

import { IBannerRepository } from "../repositories/IBanner.repository";
import { PromoBanner as Banner } from "generated/prisma";
import { create } from "domain";
import { Injectable } from "@nestjs/common";
@Injectable()
export class BannerRepository implements IBannerRepository {
    constructor(private prisma: PrismaService) { }
    FindAllBanners(): Promise<Banner[]> {
        return this.prisma.promoBanner.findMany({ include: { product: { include: { promotions: { include: { promotion: true } } } } } })
    }
    FindBannerById(id: number): Promise<Banner | null> {
        return this.prisma.promoBanner.findUnique({ where: { id }, include: { product: { include: { promotions: { include: { promotion: true } } } } } })
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

}