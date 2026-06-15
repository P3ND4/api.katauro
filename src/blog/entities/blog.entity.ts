import { Tags } from 'generated/prisma';
import { BlogContent } from './blog-content.entity';
import { BlogImage } from './blog-image.entity';
import { BlogView } from './blog-view.entity';


export class Blog {
    id: string;
    title: string;
    createdAt: Date;
    updatedAt: Date;
    introduction: string;
    publishedDate?: Date;
    draft?: boolean;
    images: BlogImage[];
    blogContent: BlogContent[];
    BlogView: BlogView[];
    tags: BlogTags[];
}


class BlogTags {
    blogId: string;
    tagId: string;
    blog: Blog;
    tag: Tags;
}