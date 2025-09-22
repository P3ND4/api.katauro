"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.catRepository = void 0;
class catRepository {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    findCategories() {
        return this.prisma.category.findMany();
    }
}
exports.catRepository = catRepository;
//# sourceMappingURL=CatRepository.js.map