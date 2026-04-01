import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PrismaService } from './shared/services/prisma/prisma.service';
import { ProductsModule } from './products/products.module';
import { OrderModule } from './order/order.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { CloudinaryModule } from './cloudinary/cloudinary.module';
import { MailService } from './shared/services/mail/mail.service';
import { ScheduleModule } from '@nestjs/schedule';
import { PromotionModule } from './promotion/promotion.module';
import { BlogModule } from './blog/blog.module';
import { SharedModule } from './shared/shared.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), SharedModule, UsersModule, ProductsModule, OrderModule, AuthModule, CloudinaryModule, ScheduleModule.forRoot(), PromotionModule, BlogModule],
  controllers: [AppController],
  providers: [AppService, MailService],
})
export class AppModule { }
