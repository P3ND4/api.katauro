import { Module } from '@nestjs/common';
import { BlogService } from './blog.service';
import { BlogController } from './blog.controller';
import { BlogsRepository } from './repositories/blogs.repository';
import { CloudinaryModule } from 'src/cloudinary/cloudinary.module';

@Module({
  controllers: [BlogController],
  providers: [BlogService, BlogsRepository, BlogsRepository],
  imports: [CloudinaryModule]
})
export class BlogModule { }
