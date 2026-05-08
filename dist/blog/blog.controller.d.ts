import { BlogService } from './blog.service';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';
import { CreateBlogContentDto, UpdateBlogContentDto, CreateBlogImageDto, UpdateBlogImageDto, CreateBlogViewDto, CreateTagsDto, UpdateTagsDto, UpdateBlogMetricsDto } from './dto';
import type { Request } from 'express';
export declare class BlogController {
    private readonly blogService;
    constructor(blogService: BlogService);
    create(createBlogDto: CreateBlogDto): Promise<import("./entities").Blog>;
    findAll(sortBy?: string, tags?: string, search?: string, page?: string): Promise<{
        blogs: import("./entities").Blog[];
        total: number;
    }>;
    findPages(tags?: string, search?: string): Promise<number>;
    getStatsOverview(): Promise<{
        totalVisits: number;
        uniqueUsers: number;
        avgTimeSeconds: number;
        totalArticles: number;
        topArticle: {
            id: string;
            title: string;
            visits: number;
        } | null;
    }>;
    getStatsTimeline(months?: string): Promise<{
        labels: string[];
        visits: number[];
        readers: number[];
        engagement: number[];
    }>;
    getStatsArticles(): Promise<{
        id: string;
        title: string;
        createdAt: Date;
        totalVisits: number;
        avgTimeSeconds: number;
        engagementRate: number;
    }[]>;
    findOne(id: string): Promise<import("./entities").Blog | null>;
    update(id: string, updateBlogDto: UpdateBlogDto): Promise<import("./entities").Blog>;
    remove(id: string): Promise<boolean>;
    createContent(blogId: string, createContentDto: CreateBlogContentDto): Promise<import("./entities").BlogContent>;
    updateContent(contentId: string, updateContentDto: UpdateBlogContentDto): Promise<import("./entities").BlogContent>;
    removeContent(contentId: string): Promise<boolean>;
    createImage(blogId: string, createImageDto: CreateBlogImageDto): Promise<import("./entities").BlogImage>;
    updateImage(imageId: string, updateImageDto: UpdateBlogImageDto): Promise<import("./entities").BlogImage>;
    removeImage(imageId: string): Promise<boolean>;
    recordView(createViewDto: CreateBlogViewDto, userId: string): Promise<import("./entities").BlogView>;
    getBlogViews(blogId: string): Promise<import("./entities").BlogView[]>;
    getUserViews(userId: string): Promise<import("./entities").BlogView[]>;
    recordPublicView(blogId: string, userId: string | undefined, req: Request): Promise<{
        viewToken: string;
        viewType: "signed" | "unsigned";
    }>;
    updateMetrics(blogId: string, metrics: UpdateBlogMetricsDto): Promise<import("./entities").BlogView | import("./entities").UnsignedBlogView>;
    getAnalytics(blogId: string): Promise<{
        blog: {
            id: string;
            title: string;
            createdAt: Date;
            introduction: string;
            images: {
                publicId: string | null;
                id: string;
                link: string;
                position: number;
                blogId: string;
                alt: string;
            }[];
            tags: {
                name: string;
                color: string;
                id: string;
                BgColor: string;
                blogId: string | null;
            }[];
        } | null;
        totalVisits: number;
        uniqueUsers: number;
        avgTimeSeconds: number;
        avgScrollDepth: number;
        readPercentage: number;
        bounceRate: number;
        totalShares: number;
        ctr: number;
        scrollDepthDistribution: Record<string, number>;
        totalLinkClicks: number;
        totalImageClicks: number;
        totalCtaClicks: number;
    }>;
    createTag(createTagDto: CreateTagsDto): Promise<import("./entities").Tags>;
    findAllTags(): Promise<import("./entities").Tags[]>;
    updateTag(id: string, updateTagDto: UpdateTagsDto): Promise<import("./entities").Tags>;
    removeTag(id: string): Promise<boolean>;
}
