import { CreateBlogImageDto } from './create-blog-image.dto';
import { CreateBlogContentDto } from './create-blog-content.dto';
import { Blog } from '../entities';

export class CreateBlogDto {
  title: string;
  images: CreateBlogImageDto[];
  blogContent: CreateBlogContentDto[];
  tags: string[];
  introduction: string;
  publishedDate?: Date;
  draft?: boolean;
}
