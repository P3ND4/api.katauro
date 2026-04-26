import { Module } from '@nestjs/common';
import { BlogService } from './blog.service';
import { BlogController } from './blog.controller';
import { BlogsRepository } from './repositories/blogs.repository';
import { CloudinaryModule } from 'src/cloudinary/cloudinary.module';
import { AdminGuard } from 'src/shared/guards/admin/admin.guard';
import { JwtAdminStrategy } from 'src/shared/guards/admin/jwt-admin.strategy';
import { SharedModule } from 'src/shared/shared.module';

@Module({
  controllers: [BlogController],
  providers: [BlogService, BlogsRepository, BlogsRepository, AdminGuard, JwtAdminStrategy],
  imports: [CloudinaryModule, SharedModule]
})
export class BlogModule { }
