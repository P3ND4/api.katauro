import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductRepository } from './products.repository';
import { Product } from './entities/product.entity';
import { catRepository } from './CatRepository';

@Injectable()
export class ProductsService {
  constructor(private productRepository: ProductRepository, private catRep: catRepository){}

  create(createProductDto: CreateProductDto) {
    return this.productRepository.createProduct(createProductDto);
  }

  findAll() {
    return this.productRepository.findAllProducts();
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
  
  async getProductByCategory(name: string){
    var products = await this.productRepository.findAllProducts() as Product[]
    return products.filter((prod)=> prod.category.nombre === name)
  }

  async getCatByName(name:string){
    return (await this.catRep.findCategories()).filter((cat)=> cat.nombre ===name);
  }

  async getCats(){
    return this.catRep.findCategories();
  }

}
