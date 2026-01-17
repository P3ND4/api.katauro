import { PrismaService } from "src/shared/services/prisma/prisma.service";
import { CreateBannerDto } from "../dto/create-banner.dto";
import { UpdateBannerDto } from "../dto/update-banner.dto";
import { IBannerRepository } from "../repositories/IBanner.repository";
import { PromoBanner as Banner } from "generated/prisma";
export declare class BannerRepository implements IBannerRepository {
    private prisma;
    constructor(prisma: PrismaService);
    FindAllBanners(): Promise<Banner[]>;
    FindBannerById(id: number): Promise<Banner | null>;
    DeleteBanner(id: number): Promise<Banner>;
    UpdateBanner(id: number, data: UpdateBannerDto): Promise<Banner>;
    CreateBanner(data: CreateBannerDto): Promise<Banner>;
}
