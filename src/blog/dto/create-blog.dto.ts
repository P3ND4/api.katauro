import { CreateBlogImageDto } from './create-blog-image.dto';
import { CreateBlogContentDto } from './create-blog-content.dto';

export class CreateBlogDto {
  title: string;
  images?: CreateBlogImageDto[];
  blogContent?: CreateBlogContentDto[];
}
