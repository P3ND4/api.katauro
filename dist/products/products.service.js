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
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
const products_repository_1 = require("./products.repository");
const product_entity_1 = require("./entities/product.entity");
const CatRepository_1 = require("./CatRepository");
const cloudinary_service_1 = require("../cloudinary/cloudinary.service");
let ProductsService = class ProductsService {
    productRepository;
    propRep;
    cloudyService;
    CatParser = [
        product_entity_1.Categories.footLumin,
        product_entity_1.Categories.lightBulb,
        product_entity_1.Categories.roofLumin,
        product_entity_1.Categories.tableLumin,
        product_entity_1.Categories.wallLumin
    ];
    constructor(productRepository, propRep, cloudyService) {
        this.productRepository = productRepository;
        this.propRep = propRep;
        this.cloudyService = cloudyService;
    }
    onModuleInit() {
        this.propRep.seedBaseCategories();
    }
    async create(createProductDto) {
        createProductDto.variants = await Promise.all(createProductDto.variants.map(async (x) => {
            let varian = x;
            varian.images = await Promise.all(x.images.map(async (y) => y.public_id ? await this.cloudyService.moveImage(y.public_id, y.link) : y));
            varian.image = varian.images[0].link;
            return varian;
        }));
        let vector = createProductDto.vPublicId ? await this.cloudyService.moveImage(createProductDto.vPublicId, createProductDto.vector) : { link: createProductDto.vector, public_id: undefined };
        createProductDto.vector = vector.link;
        createProductDto.vPublicId = vector.public_id;
        return this.productRepository.createProduct(createProductDto);
    }
    async findAll(options) {
        var products = (await this.productRepository.findAllProducts());
        const catList = options?.category ? options.category.split('-') : null;
        const categories = catList ? catList.map((cat) => this.CatParser[+cat]) : null;
        products = categories ? products.filter((p) => categories.includes(p.category?.nombre)) : products;
        products = options?.search ? products.filter(p => p.name.toLowerCase().includes(options.search.toLowerCase())) : products;
        return options?.page ? products.slice((options.page - 1) * 9, (options.page - 1) * 9 + 9) : products;
    }
    async findPage(page) {
        const products = await this.productRepository.findAllProducts();
        return products.slice((page - 1) * 9, (page - 1) * 9 + 9);
    }
    async getPages(options) {
        var products = (await this.productRepository.findAllProducts());
        const catList = options?.category ? options.category.split('-') : null;
        const categories = catList ? catList.map((cat) => this.CatParser[+cat]) : null;
        products = categories ? products.filter((p) => categories.includes(p.category?.nombre)) : products;
        products = options?.search ? products.filter(p => p.name.toLowerCase().includes(options.search.toLowerCase())) : products;
        return products.length / 9 > 0 ? Math.ceil(products.length / 9) : 1;
    }
    findOne(id) {
        return this.productRepository.findProductById(id);
    }
    async update(id, updateProductDto) {
        updateProductDto.variants = await Promise.all(updateProductDto.variants ? updateProductDto.variants.map(async (x) => {
            let varian = x;
            varian.images = await Promise.all(x.images.map(async (y) => y.public_id ? await this.cloudyService.moveImage(y.public_id, y.link) : y));
            varian.image = varian.images[0].link;
            return varian;
        }) : []);
        let vector = updateProductDto.vPublicId && updateProductDto.vector ? await this.cloudyService.moveImage(updateProductDto.vPublicId, updateProductDto.vector) : { link: updateProductDto.vector, public_id: undefined };
        updateProductDto.vector = vector.link;
        updateProductDto.vPublicId = vector.public_id;
        return this.productRepository.updateProduct(id, updateProductDto);
    }
    remove(id) {
        return this.productRepository.deleteProduct(id);
    }
    async getProductByCategory(name, page) {
        var products = await this.productRepository.findAllProducts();
        const names = name.split('-').map(n => this.CatParser[+n]);
        products = products.filter((prod) => names.includes(prod.category?.nombre));
        return page ? products.slice((page - 1) * 9, (page - 1) * 9 + 9) : products;
    }
    async getCatByName(name) {
        return (await this.propRep.findCategories()).filter((cat) => cat.nombre === name);
    }
    async getCats() {
        return this.propRep.findCategories();
    }
    getFinishes() {
        return this.propRep.findFinishes();
    }
    async createFinish(data) {
        let cloudUpdate = data.public_id ? await this.cloudyService.moveImage(data.public_id, data.image) : { link: data.image, public_id: undefined };
        data.image = cloudUpdate.link;
        data.public_id = cloudUpdate.public_id;
        return this.propRep.addFinish(data);
    }
    deleteFinish(id) {
        return this.propRep.deleteFinish(id);
    }
    getColors() {
        return this.propRep.findColors();
    }
    async createColor(data) {
        let cloudUpdate = data.public_id ? await this.cloudyService.moveImage(data.public_id, data.image) : { link: data.image, public_id: undefined };
        data.image = cloudUpdate.link;
        data.public_id = cloudUpdate.public_id;
        return this.propRep.addColor(data);
    }
    deleteColor(id) {
        return this.propRep.deleteColor(id);
    }
};
exports.ProductsService = ProductsService;
exports.ProductsService = ProductsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [products_repository_1.ProductRepository, CatRepository_1.propRepository, cloudinary_service_1.CloudinaryService])
], ProductsService);
//# sourceMappingURL=products.service.js.map