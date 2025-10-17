"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.propRepository = void 0;
const prisma_service_1 = require("../prisma/prisma.service");
const common_1 = require("@nestjs/common");
let propRepository = class propRepository {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    findColors() {
        return this.prisma.color.findMany();
    }
    addColor(data) {
        return this.prisma.color.create({ data });
    }
    deleteColor(id) {
        return this.prisma.color.delete({ where: { id: id } });
    }
    findFinishes() {
        return this.prisma.finish.findMany();
    }
    addFinish(data) {
        return this.prisma.finish.create({ data });
    }
    deleteFinish(id) {
        return this.prisma.finish.delete({ where: { id: id } });
    }
    findCategories() {
        return this.prisma.category.findMany();
    }
};
exports.propRepository = propRepository;
exports.propRepository = propRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], propRepository);
//# sourceMappingURL=CatRepository.js.map