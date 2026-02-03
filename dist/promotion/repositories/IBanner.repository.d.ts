import { PromoBanner as Banner } from "generated/prisma";
import { CreateBannerDto } from "../dto/create-banner.dto";
import { UpdateBannerDto } from "../dto/update-banner.dto";
export interface IBannerRepository {
    FindAllBanners(): Promise<Banner[]>;
    FindBannerById(id: number): Promise<Banner | null>;
    DeleteBanner(id: number): Promise<Banner>;
    UpdateBanner(id: number, data: UpdateBannerDto): Promise<Banner>;
    CreateBanner(data: CreateBannerDto): Promise<Banner>;
}
