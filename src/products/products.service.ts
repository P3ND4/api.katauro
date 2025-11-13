import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductRepository } from './products.repository';
import { Categories, Product } from './entities/product.entity';
import { propRepository } from './CatRepository';

@Injectable()
export class ProductsService {

  readonly CatParser = [
    Categories.footLumin,
    Categories.lightBulb,
    Categories.roofLumin,
    Categories.tableLumin,
    Categories.wallLumin
  ]
  constructor(private productRepository: ProductRepository, private propRep: propRepository) { }

  async create(createProductDto: CreateProductDto) {

    return this.productRepository.createProduct(createProductDto);
  }

  findAll() {
    return this.productRepository.findAllProducts();
  }

  async findPage(page: number) {
    const products = await this.productRepository.findAllProducts();
    return products.slice((page - 1) * 9, (page - 1) * 9 + 9)
  }

  //TODO: esto hay que mejorarlo para cualquier filtrado
  async getPages(category?: string) {
    const products = await this.productRepository.findAllProducts()

    const catList = category ? category.split('-')  : null;
    const categories = catList ? catList.map((cat) => this.CatParser[+cat]) : null;
    return !categories? Math.ceil(products.length / 9) : Math.ceil(products.filter((p) => (p as Product).category.nombre in categories).length / 9);
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
    products = products.filter((prod) => prod.category.nombre in names);
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
