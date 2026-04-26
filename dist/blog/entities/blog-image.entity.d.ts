import { Blog } from './blog.entity';
export declare class BlogImage {
    id: string;
    link: string;
    publicId?: string;
    position: number;
    blogId: string;
    alt?: string;
    blog?: Blog;
}
