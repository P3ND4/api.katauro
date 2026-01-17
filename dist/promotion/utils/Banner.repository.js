"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BannerRepository = void 0;
class BannerRepository {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    FindAllBanners() {
        return this.prisma.promoBanner.findMany({ include: { product: { include: { promotions: { include: { promotion: true } } } } } });
    }
    FindBannerById(id) {
        return this.prisma.promoBanner.findUnique({ where: { id }, include: { product: { include: { promotions: { include: { promotion: true } } } } } });
    }
    DeleteBanner(id) {
        return this.prisma.promoBanner.delete({ where: { id } });
    }
    UpdateBanner(id, data) {
        return this.prisma.promoBanner.update({ where: { id }, data });
    }
    CreateBanner(data) {
        return this.prisma.promoBanner.create({ data: data });
    }
}
exports.BannerRepository = BannerRepository;
//# sourceMappingURL=Banner.repository.js.map