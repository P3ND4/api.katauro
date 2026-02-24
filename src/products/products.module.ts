import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { PrismaService } from 'src/shared/services/prisma/prisma.service';
import { ProductRepository } from './products.repository';
import { SpecProductService } from './spec-product/spec-product.service';
import { SpecProductRepository } from './spec-product/spec-product.repository';
import { propRepository } from './CatRepository';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [ProductsController],
  imports: [AuthModule],
  providers: [ProductsService, PrismaService, ProductRepository, SpecProductService, SpecProductRepository, propRepository, CloudinaryService],
})
export class ProductsModule { }
