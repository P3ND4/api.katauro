import { Blog } from './blog.entity';
export declare class UnsignedBlogView {
    id: string;
    blogId: string;
    ipAddress: string;
    viewedAt: Date;
    scrollDepth: number;
    timeSpent: number;
    bounced: boolean;
    completed: boolean;
    shares: number;
    linkClicks: number;
    imageClicks: number;
    ctaClicks: number;
    Blog?: Blog;
}
