import { CreateBlogImageDto } from './create-blog-image.dto';
import { CreateBlogContentDto } from './create-blog-content.dto';
export declare class CreateBlogDto {
    title: string;
    images: CreateBlogImageDto[];
    blogContent: CreateBlogContentDto[];
    tags: string[];
    introduction: string;
}
