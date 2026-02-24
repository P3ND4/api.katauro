import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { PrismaService } from 'src/shared/services/prisma/prisma.service';
import { OrderRepository } from './order.repository';
import { SpecProductService } from 'src/products/spec-product/spec-product.service';
import { SpecProductRepository } from 'src/products/spec-product/spec-product.repository';
import { ProductsModule } from 'src/products/products.module';
import cloudinary from 'src/cloudinary/cloudinary.config';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [OrderController],
  imports: [AuthModule],
  providers: [OrderService, PrismaService, OrderRepository, ProductsModule, SpecProductService, SpecProductRepository, CloudinaryService],
})
export class OrderModule { }
