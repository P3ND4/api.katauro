import { Module } from '@nestjs/common';
import { BlogService } from './blog.service';
import { BlogController } from './blog.controller';
import { BlogsRepository } from './repositories/blogs.repository';

@Module({
  controllers: [BlogController],
  providers: [BlogService, BlogsRepository],
})
export class BlogModule {}
