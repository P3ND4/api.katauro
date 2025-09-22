import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { ProductRepository } from './products.repository';
import { SpecProductService } from './spec-product/spec-product.service';
import { SpecProductRepository } from './spec-product/spec-product.repository';
import { catRepository } from './CatRepository';

@Module({
  controllers: [ProductsController],
  providers: [ProductsService, PrismaService, ProductRepository, SpecProductService, SpecProductRepository, catRepository],
})
export class ProductsModule {}
