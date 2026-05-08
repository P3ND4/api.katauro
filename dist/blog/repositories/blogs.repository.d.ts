import { PrismaService } from '../../shared/services/prisma/prisma.service';
import { CreateBlogDto } from '../dto/create-blog.dto';
import { UpdateBlogDto } from '../dto/update-blog.dto';
import { CreateBlogContentDto, UpdateBlogContentDto, CreateBlogImageDto, UpdateBlogImageDto, CreateBlogViewDto, CreateUnsignedBlogViewDto, UpdateBlogMetricsDto, CreateTagsDto, UpdateTagsDto } from '../dto';
import { Blog } from '../entities/blog.entity';
import { BlogImage } from '../entities/blog-image.entity';
import { BlogView } from '../entities/blog-view.entity';
import { UnsignedBlogView } from '../entities/unsigned-blog-view.entity';
import { Tags } from '../entities/tags.entity';
import { BlogContent } from '../entities/blog-content.entity';
export declare class BlogsRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    createBlogWithContent(createBlogDto: CreateBlogDto): Promise<Blog>;
    findAllBlogs(options?: {
        sortBy?: string;
        tags?: string;
        search?: string;
    }): Promise<Blog[]>;
    findBlogById(id: string): Promise<Blog | null>;
    updateBlog(id: string, updateBlogDto: UpdateBlogDto): Promise<Blog>;
    deleteBlog(id: string): Promise<boolean>;
    createBlogContent(blogId: string, createContentDto: CreateBlogContentDto): Promise<BlogContent>;
    updateBlogContent(contentId: string, updateContentDto: UpdateBlogContentDto): Promise<BlogContent>;
    deleteBlogContent(contentId: string): Promise<boolean>;
    createBlogImage(blogId: string, createImageDto: CreateBlogImageDto): Promise<BlogImage>;
    updateBlogImage(imageId: string, updateImageDto: UpdateBlogImageDto): Promise<BlogImage>;
    deleteBlogImage(imageId: string): Promise<boolean>;
    createBlogView(createViewDto: CreateBlogViewDto): Promise<BlogView>;
    getBlogViews(blogId: string): Promise<BlogView[]>;
    getUserBlogViews(userId: string): Promise<BlogView[]>;
    createTag(createTagDto: CreateTagsDto): Promise<Tags>;
    findAllTags(): Promise<Tags[]>;
    updateTag(id: string, updateTagDto: UpdateTagsDto): Promise<Tags>;
    createUnsignedBlogView(createViewDto: CreateUnsignedBlogViewDto): Promise<UnsignedBlogView>;
    updateSignedBlogViewMetrics(blogId: string, userId: string, metrics: UpdateBlogMetricsDto): Promise<BlogView>;
    updateUnsignedBlogViewMetrics(viewId: string, metrics: UpdateBlogMetricsDto): Promise<UnsignedBlogView>;
    getBlogAnalytics(blogId: string): Promise<{
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
    deleteTag(id: string): Promise<boolean>;
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
    getStatsTimeline(months?: number): Promise<{
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
    private mapToBlogEntity;
    private mapToBlogImageEntity;
    private mapToBlogContentEntity;
    private mapToBlogViewEntity;
    private mapToUnsignedBlogViewEntity;
    private mapToTagsEntity;
}
