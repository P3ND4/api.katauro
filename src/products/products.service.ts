import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductRepository } from './products.repository';

@Injectable()
export class ProductsService {
  constructor(private productRepository: ProductRepository){}

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
  
}
