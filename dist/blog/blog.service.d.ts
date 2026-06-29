import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';
import { BlogsRepository } from './repositories/blogs.repository';
import { CreateBlogContentDto, UpdateBlogContentDto, CreateBlogImageDto, UpdateBlogImageDto, CreateBlogViewDto, UpdateBlogMetricsDto, CreateTagsDto, UpdateTagsDto } from './dto';
import { Blog, BlogContent, BlogImage, BlogView, UnsignedBlogView, Tags } from './entities/index';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';
export declare class BlogService {
    private readonly blogsRepository;
    private cloudinaryService;
    constructor(blogsRepository: BlogsRepository, cloudinaryService: CloudinaryService);
    create(createBlogDto: CreateBlogDto): Promise<Blog>;
    findAll(options?: {
        sortBy?: string;
        tags?: string;
        search?: string;
        page?: number;
        includeDrafts?: boolean;
    }): Promise<{
        blogs: Blog[];
        total: number;
    }>;
    getPages(options?: {
        tags?: string;
        search?: string;
        includeDrafts?: boolean;
    }): Promise<number>;
    findOne(id: string, includeDrafts?: boolean): Promise<Blog | null>;
    update(id: string, updateBlogDto: UpdateBlogDto): Promise<Blog>;
    remove(id: string): Promise<boolean>;
    createBlogContent(blogId: string, createContentDto: CreateBlogContentDto): Promise<BlogContent>;
    updateBlogContent(contentId: string, updateContentDto: UpdateBlogContentDto): Promise<BlogContent>;
    removeBlogContent(contentId: string): Promise<boolean>;
    createBlogImage(blogId: string, createImageDto: CreateBlogImageDto): Promise<BlogImage>;
    updateBlogImage(imageId: string, updateImageDto: UpdateBlogImageDto): Promise<BlogImage>;
    removeBlogImage(imageId: string): Promise<boolean>;
    recordBlogView(createViewDto: CreateBlogViewDto): Promise<BlogView>;
    getBlogViews(blogId: string): Promise<BlogView[]>;
    getUserViews(userId: string): Promise<BlogView[]>;
    createTag(createTagDto: CreateTagsDto): Promise<Tags>;
    findAllTags(): Promise<Tags[]>;
    updateTag(id: string, updateTagDto: UpdateTagsDto): Promise<Tags>;
    removeTag(id: string): Promise<boolean>;
    recordView(blogId: string, userId?: string, ipAddress?: string): Promise<{
        viewToken: string;
        viewType: 'signed' | 'unsigned';
    }>;
    updateMetrics(blogId: string, metrics: UpdateBlogMetricsDto): Promise<BlogView | UnsignedBlogView>;
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
}
