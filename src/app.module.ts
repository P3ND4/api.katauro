import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PrismaService } from './prisma/prisma.service';
import { ProductsModule } from './products/products.module';
import { OrderModule } from './order/order.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { CloudinaryModule } from './cloudinary/cloudinary.module';
import { MailService } from './shared/services/mail/mail.service';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), // SOLO aquí
    UsersModule, ProductsModule, OrderModule, AuthModule, CloudinaryModule],
  controllers: [AppController],
  providers: [AppService, PrismaService, MailService],
})
export class AppModule { }
