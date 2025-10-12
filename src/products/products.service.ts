import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductRepository } from './products.repository';
import { Product } from './entities/product.entity';
import { propRepository } from './CatRepository';

@Injectable()
export class ProductsService {
  constructor(private productRepository: ProductRepository, private propRep: propRepository){}

  async create(createProductDto: CreateProductDto) {

    return this.productRepository.createProduct(createProductDto);
  }

  findAll() {
    return this.productRepository.findAllProducts();
  }

  async findPage(page: number) {
    const products = await this.productRepository.findAllProducts();
    return products.slice((page-1)*9, (page-1)*9+9)
  }
  
  async getPages(category?: string){
    const products = await this.productRepository.findAllProducts()
    
    return !category? Math.ceil(products.length/9): Math.ceil(products.filter((p)=>(p as Product).category.nombre === category).length/9);
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
  
  async getProductByCategory(name: string, page?: number){
    var products = await this.productRepository.findAllProducts() as Product[]
    products = products.filter((prod)=> prod.category.nombre === name);
    return page? products.slice((page-1)*9, (page-1)*9+9): products
  }

  async getCatByName(name:string){
    return (await this.propRep.findCategories()).filter((cat)=> cat.nombre ===name);
  }

  async getCats(){
    return this.propRep.findCategories();
  }

  getFinishes(){
    return this.propRep.findFinishes();
  }

  createFinish(data: any){
    return this.propRep.addFinish(data);
  }

  deleteFinish(id: string){
    return this.propRep.deleteFinish(id);
  }


}
