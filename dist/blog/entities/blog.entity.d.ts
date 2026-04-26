import { Tags } from 'generated/prisma';
import { BlogContent } from './blog-content.entity';
import { BlogImage } from './blog-image.entity';
import { BlogView } from './blog-view.entity';
export declare class Blog {
    id: string;
    title: string;
    createdAt: Date;
    updatedAt: Date;
    introduction: string;
    images: BlogImage[];
    blogContent: BlogContent[];
    BlogView: BlogView[];
    tags: BlogTags[];
}
declare class BlogTags {
    blogId: string;
    tagId: string;
    blog: Blog;
    tag: Tags;
}
export {};
