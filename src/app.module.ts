import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PrismaService } from './prisma/prisma.service';
import { ProductsModule } from './products/products.module';
import { OrderModule } from './order/order.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { SpecProductService } from './product/spec-product/spec-product.service';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), // SOLO aquí
    UsersModule, ProductsModule, OrderModule, AuthModule],
  controllers: [AppController],
  providers: [AppService, PrismaService, SpecProductService],
})
export class AppModule { }
