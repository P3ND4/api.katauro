import { Injectable, OnModuleInit } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductRepository } from './products.repository';
import { Categories, Product } from './entities/product.entity';
import { propRepository } from './CatRepository';

@Injectable()
export class ProductsService implements OnModuleInit {

  readonly CatParser = [
    Categories.footLumin,
    Categories.lightBulb,
    Categories.roofLumin,
    Categories.tableLumin,
    Categories.wallLumin
  ]
  constructor(private productRepository: ProductRepository, private propRep: propRepository) { }
  onModuleInit() {
    this.propRep.seedBaseCategories();
  }

  async create(createProductDto: CreateProductDto) {

    return this.productRepository.createProduct(createProductDto);
  }

  async findAll(options?: { category?: string, search?: string, page?: number }) {
    var products = (await this.productRepository.findAllProducts()) as Product[];
    const catList = options?.category ? options.category.split('-') : null;
    const categories = catList ? catList.map((cat) => this.CatParser[+cat]) : null;

    products = categories ? products.filter((p) => categories.includes((p as Product).category?.nombre as Categories)) : products;
    products = options?.search ? products.filter(p => p.name.toLowerCase().includes(options.search!.toLowerCase())) : products;
    return options?.page ? products.slice((options.page - 1) * 9, (options.page - 1) * 9 + 9) : products;

  }

  async findPage(page: number) {
    const products = await this.productRepository.findAllProducts();
    return products.slice((page - 1) * 9, (page - 1) * 9 + 9)
  }

  //TODO: esto hay que mejorarlo para cualquier filtrado
  async getPages(options?: { category?: string, search?: string }) {
    var products = (await this.productRepository.findAllProducts()) as Product[];
    const catList = options?.category ? options.category.split('-') : null;
    const categories = catList ? catList.map((cat) => this.CatParser[+cat]) : null;

    products = categories ? products.filter((p) => categories.includes((p as Product).category?.nombre as Categories)) : products;
    products = options?.search ? products.filter(p => p.name.toLowerCase().includes(options.search!.toLowerCase())) : products;
    return products.length / 9 > 0 ? Math.ceil(products.length / 9) : 1;
  }

  findOne(id: string) {
    return this.productRepository.findProductById(id);
  }

  update(id: string, updateProductDto: UpdateProductDto) {
    return this.productRepository.updateProduct(id, updateProductDto);
  }

  remove(id: string) {
    return this.productRepository.deleteProduct(id);
  }

  async getProductByCategory(name: string, page?: number) {
    var products = await this.productRepository.findAllProducts() as Product[]
    const names = name.split('-').map(n => this.CatParser[+n]);
    products = products.filter((prod) => names.includes(prod.category?.nombre as Categories));
    return page ? products.slice((page - 1) * 9, (page - 1) * 9 + 9) : products
  }

  async getCatByName(name: string) {
    return (await this.propRep.findCategories()).filter((cat) => cat.nombre === name);
  }

  async getCats() {
    return this.propRep.findCategories();
  }

  getFinishes() {
    return this.propRep.findFinishes();
  }

  createFinish(data: any) {
    return this.propRep.addFinish(data);
  }

  deleteFinish(id: string) {
    return this.propRep.deleteFinish(id);
  }

  getColors() {
    return this.propRep.findColors();
  }

  createColor(data: { image: string, name: string }) {
    return this.propRep.addColor(data);
  }

  deleteColor(id: string) {
    return this.propRep.deleteColor(id);
  }

}
