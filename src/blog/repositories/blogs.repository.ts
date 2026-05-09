import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../shared/services/prisma/prisma.service';
import { CreateBlogDto } from '../dto/create-blog.dto';
import { UpdateBlogDto } from '../dto/update-blog.dto';

import {
    CreateBlogContentDto,
    UpdateBlogContentDto,
    CreateBlogImageDto,
    UpdateBlogImageDto,
    CreateBlogViewDto,
    CreateUnsignedBlogViewDto,
    UpdateBlogMetricsDto,
    CreateTagsDto,
    UpdateTagsDto,
} from '../dto';
import { Blog } from '../entities/blog.entity';
import { BlogImage } from '../entities/blog-image.entity';
import { BlogView } from '../entities/blog-view.entity';
import { UnsignedBlogView } from '../entities/unsigned-blog-view.entity';
import { Tags } from '../entities/tags.entity';
import { BlogContent } from '../entities/blog-content.entity';

@Injectable()
export class BlogsRepository {
    constructor(private readonly prisma: PrismaService) { }

    /**
     * Crear un blog con su contenido e imágenes asociadas
     */
    async createBlogWithContent(createBlogDto: CreateBlogDto): Promise<Blog> {
        const blog = await this.prisma.blog.create({
            data: {
                title: createBlogDto.title,
                introduction: createBlogDto.introduction,
                images: {
                    create: createBlogDto.images?.map((img, index) => ({
                        link: img.link,
                        publicId: img.publicId,
                        position: img.position ?? index,
                    })) || [],
                },
                blogContent: {
                    create: createBlogDto.blogContent?.map((content, index) => ({
                        text: content.text,
                        position: content.position ?? index,
                    })) || [],
                },
                BlogTags: {
                    create: createBlogDto.tags?.map((tag) => ({ tagId: tag })) || [],
                },
            },
            include: {
                images: true,
                blogContent: true,
                BlogView: true,
                BlogTags: {
                    include: {
                        tag: true,
                    },
                },
            },
        });

        return this.mapToBlogEntity(blog);
    }

    /**
     * Obtener todos los blogs con opciones de filtro
     * @param options Opciones de filtrado: sortBy ('asc'|'desc'), tags (IDs separados por comas) y search (búsqueda por título)
     */
    async findAllBlogs(options?: { sortBy?: string; tags?: string; search?: string }): Promise<Blog[]> {
        const tagIds = options?.tags ? options.tags.split(',').filter(t => t.trim()) : [];
        
        const blogs = await this.prisma.blog.findMany({
            include: {
                images: true,
                blogContent: true,
                BlogView: { include: { User: true } },
                BlogTags: { include: { tag: true } }
            },
            where: {
                ...(tagIds.length > 0 && {
                    BlogTags: {
                        some: {
                            tagId: {
                                in: tagIds,
                            },
                        },
                    },
                }),
                ...(options?.search && {
                    title: {
                        contains: options.search
                    }
                })
            },
            orderBy: {
                createdAt: options?.sortBy === 'asc' ? 'asc' : 'desc',
            },
        });

        return blogs.map((blog) => this.mapToBlogEntity(blog));
    }

    /**
     * Obtener un blog por ID con todo su contenido
     */
    async findBlogById(id: string): Promise<Blog | null> {
        const blog = await this.prisma.blog.findUnique({
            where: { id },
            include: {
                images: true,
                blogContent: true,
                BlogView: true,
                BlogTags: {
                    include: {
                        tag: true,
                    },
                },
            },
        });

        return blog ? this.mapToBlogEntity(blog) : null;
    }

    /**
     * Actualizar un blog
     */
    async updateBlog(id: string, updateBlogDto: UpdateBlogDto): Promise<Blog> {
        const blog = await this.prisma.blog.update({
            where: { id },
            data: {
                title: updateBlogDto.title,
                introduction: updateBlogDto.introduction,
                blogContent: {
                    deleteMany: updateBlogDto.blogContent?.map((content) => ({ blogId: id })) || [],
                    createMany: {
                        data: updateBlogDto.blogContent?.map((content) => ({
                            text: content.text,
                            position: content.position,
                        })) || []
                    },
                },

                BlogTags: {

                    deleteMany: { blogId: id }, // Elimina todas las relaciones de tags para este blog (puedes ajustar esto según tus necesidades)
                    createMany: {
                        data: updateBlogDto.tags?.map((tag) => ({ tagId: tag })) || [],
                    },
                },

                images: {
                    deleteMany: updateBlogDto.images?.map((img) => ({ blogId: id })) || [],
                    createMany: {
                        data: updateBlogDto.images?.map((img) => ({
                            link: img.link,
                            publicId: img.publicId,
                            position: img.position,
                        })) || []
                    }
                },

            },
            include: {
                images: true,
                blogContent: true,
                BlogView: true,
            },
        });

        return this.mapToBlogEntity(blog);
    }

    /**
     * Eliminar un blog (elimina todo el contenido asociado en cascada)
     */
    async deleteBlog(id: string): Promise<boolean> {
        try {
            await this.prisma.blog.delete({
                where: { id },
            });
            return true;
        } catch (error) {
            return false;
        }
    }

    /**
     * Crear contenido de blog
     */
    async createBlogContent(
        blogId: string,
        createContentDto: CreateBlogContentDto,
    ): Promise<BlogContent> {
        const content = await this.prisma.blogContent.create({
            data: {
                blogId,
                text: createContentDto.text,
                position: createContentDto.position ?? 0,
            },
            include: {
                blog: {
                    include: {
                        images: true,
                        blogContent: true,
                        BlogView: true,
                    },
                },
            },
        });

        return this.mapToBlogContentEntity(content);
    }

    /**
     * Actualizar contenido de blog
     */
    async updateBlogContent(
        contentId: string,
        updateContentDto: UpdateBlogContentDto,
    ): Promise<BlogContent> {
        const content = await this.prisma.blogContent.update({
            where: { id: contentId },
            data: {
                text: updateContentDto.text,
                position: updateContentDto.position,
            },
            include: {
                blog: {
                    include: {
                        images: true,
                        blogContent: true,
                        BlogView: true,
                    },
                },
            },
        });

        return this.mapToBlogContentEntity(content);
    }

    /**
     * Eliminar contenido de blog
     */
    async deleteBlogContent(contentId: string): Promise<boolean> {
        try {
            await this.prisma.blogContent.delete({
                where: { id: contentId },
            });
            return true;
        } catch (error) {
            return false;
        }
    }

    /**
     * Crear imagen de blog
     */
    async createBlogImage(
        blogId: string,
        createImageDto: CreateBlogImageDto,
    ): Promise<BlogImage> {
        const image = await this.prisma.blogImage.create({
            data: {
                blogId,
                link: createImageDto.link,
                publicId: createImageDto.publicId,
                position: createImageDto.position ?? 0,
            },
            include: {
                blog: {
                    include: {
                        images: true,
                        blogContent: true,
                        BlogView: true,
                    },
                },
            },
        });

        return this.mapToBlogImageEntity(image);
    }

    /**
     * Actualizar imagen de blog
     */
    async updateBlogImage(
        imageId: string,
        updateImageDto: UpdateBlogImageDto,
    ): Promise<BlogImage> {
        const image = await this.prisma.blogImage.update({
            where: { id: imageId },
            data: {
                link: updateImageDto.link,
                publicId: updateImageDto.publicId,
                position: updateImageDto.position,
            },
            include: {
                blog: {
                    include: {
                        images: true,
                        blogContent: true,
                        BlogView: true,
                    },
                },
            },
        });

        return this.mapToBlogImageEntity(image);
    }

    /**
     * Eliminar imagen de blog
     */
    async deleteBlogImage(imageId: string): Promise<boolean> {
        try {
            await this.prisma.blogImage.delete({
                where: { id: imageId },
            });
            return true;
        } catch (error) {
            return false;
        }
    }

    /**
     * Registrar vista de blog
     */
    async createBlogView(createViewDto: CreateBlogViewDto): Promise<BlogView> {
        const view = await this.prisma.blogView.create({
            data: {
                blogId: createViewDto.blogId,
                UserId: createViewDto.UserId,
            },
            include: {
                User: true,
                Blog: {
                    include: {
                        images: true,
                        blogContent: true,
                        BlogView: true,
                    },
                },
            },
        });

        return this.mapToBlogViewEntity(view);
    }

    /**
     * Obtener todas las vistas de un blog
     */
    async getBlogViews(blogId: string): Promise<BlogView[]> {
        const views = await this.prisma.blogView.findMany({
            where: { blogId },
            include: {
                User: true,
                Blog: {
                    include: {
                        images: true,
                        blogContent: true,
                        BlogView: true,
                    },
                },
            },
        });

        return views.map((view) => this.mapToBlogViewEntity(view));
    }

    /**
     * Obtener vistas de un usuario
     */
    async getUserBlogViews(userId: string): Promise<BlogView[]> {
        const views = await this.prisma.blogView.findMany({
            where: { UserId: userId },
            include: {
                User: true,
                Blog: {
                    include: {
                        images: true,
                        blogContent: true,
                        BlogView: true,
                    },
                },
            },
        });

        return views.map((view) => this.mapToBlogViewEntity(view));
    }

    /**
     * Crear etiqueta
     */
    async createTag(createTagDto: CreateTagsDto): Promise<Tags> {
        const tag = await this.prisma.tags.create({
            data: {
                name: createTagDto.name,
                color: createTagDto.color,
                BgColor: createTagDto.bgColor,
            },
        });

        return this.mapToTagsEntity(tag);
    }

    /**
     * Obtener todas las etiquetas
     */
    async findAllTags(): Promise<Tags[]> {
        const tags = await this.prisma.tags.findMany();
        return tags.map((tag) => this.mapToTagsEntity(tag));
    }

    /**
     * Actualizar etiqueta
     */
    async updateTag(id: string, updateTagDto: UpdateTagsDto): Promise<Tags> {
        const tag = await this.prisma.tags.update({
            where: { id },
            data: {
                name: updateTagDto.name,
                color: updateTagDto.color,
            },
        });

        return this.mapToTagsEntity(tag);
    }

    /**
     * Registrar vista de blog anónima
     */
    async createUnsignedBlogView(createViewDto: CreateUnsignedBlogViewDto): Promise<UnsignedBlogView> {
        const view = await this.prisma.unsignedBlogView.create({
            data: {
                blogId: createViewDto.blogId,
                ipAddress: createViewDto.ipAddress,
            },
            include: {
                Blog: {
                    include: {
                        images: true,
                        blogContent: true,
                        BlogView: true,
                    },
                },
            },
        });

        return this.mapToUnsignedBlogViewEntity(view);
    }

    /**
     * Actualizar métricas de vista registrada (usuario autenticado)
     */
    async updateSignedBlogViewMetrics(blogId: string, userId: string, metrics: UpdateBlogMetricsDto): Promise<BlogView> {
        const data: any = {};
        if (metrics.scrollDepth !== undefined) data.scrollDepth = Math.max(metrics.scrollDepth, 0);
        if (metrics.timeSpent !== undefined) data.timeSpent = (data.timeSpent ?? 0) + metrics.timeSpent;
        if (metrics.bounced !== undefined) data.bounced = metrics.bounced;
        if (metrics.completed !== undefined) data.completed = metrics.completed;
        if (metrics.shares !== undefined) data.shares = (data.shares ?? 0) + metrics.shares;
        if (metrics.linkClicks !== undefined) data.linkClicks = (data.linkClicks ?? 0) + metrics.linkClicks;
        if (metrics.imageClicks !== undefined) data.imageClicks = (data.imageClicks ?? 0) + metrics.imageClicks;
        if (metrics.ctaClicks !== undefined) data.ctaClicks = (data.ctaClicks ?? 0) + metrics.ctaClicks;

        const view = await this.prisma.blogView.update({
            where: { blogId_UserId: { blogId, UserId: userId } },
            data,
            include: {
                User: true,
                Blog: {
                    include: {
                        images: true,
                        blogContent: true,
                        BlogView: true,
                    },
                },
            },
        });

        return this.mapToBlogViewEntity(view);
    }

    /**
     * Actualizar métricas de vista anónima
     */
    async updateUnsignedBlogViewMetrics(viewId: string, metrics: UpdateBlogMetricsDto): Promise<UnsignedBlogView> {
        const data: any = {};
        if (metrics.scrollDepth !== undefined) data.scrollDepth = Math.max(metrics.scrollDepth, 0);
        if (metrics.timeSpent !== undefined) data.timeSpent = (data.timeSpent ?? 0) + metrics.timeSpent;
        if (metrics.bounced !== undefined) data.bounced = metrics.bounced;
        if (metrics.completed !== undefined) data.completed = metrics.completed;
        if (metrics.shares !== undefined) data.shares = (data.shares ?? 0) + metrics.shares;
        if (metrics.linkClicks !== undefined) data.linkClicks = (data.linkClicks ?? 0) + metrics.linkClicks;
        if (metrics.imageClicks !== undefined) data.imageClicks = (data.imageClicks ?? 0) + metrics.imageClicks;
        if (metrics.ctaClicks !== undefined) data.ctaClicks = (data.ctaClicks ?? 0) + metrics.ctaClicks;

        const view = await this.prisma.unsignedBlogView.update({
            where: { id: viewId },
            data,
            include: {
                Blog: {
                    include: {
                        images: true,
                        blogContent: true,
                        BlogView: true,
                    },
                },
            },
        });

        return this.mapToUnsignedBlogViewEntity(view);
    }

    /**
     * Obtener analíticas agregadas de un blog (vistas registradas + anónimas)
     */
    async getBlogAnalytics(blogId: string) {
        const signedViews = await this.prisma.blogView.findMany({ where: { blogId } });
        const unsignedViews = await this.prisma.unsignedBlogView.findMany({ where: { blogId } });
        const blog = await this.prisma.blog.findUnique({
            where: { id: blogId },
            include: { images: true, BlogTags: { include: { tag: true } } },
        });

        const allViews = [...signedViews, ...unsignedViews];
        const totalVisits = signedViews.length + unsignedViews.length;
        const uniqueUsers = new Set(signedViews.map(v => v.UserId)).size;
        const uniqueIps = new Set(unsignedViews.map(v => v.ipAddress)).size;
        const uniqueTotal = uniqueUsers + uniqueIps;

        const avgTime = allViews.length > 0
            ? Math.round(allViews.reduce((sum, v) => sum + v.timeSpent, 0) / allViews.length)
            : 0;

        const avgScrollDepth = allViews.length > 0
            ? Math.round(allViews.reduce((sum, v) => sum + v.scrollDepth, 0) / allViews.length)
            : 0;

        const completedCount = allViews.filter(v => v.completed).length;
        const readPercentage = totalVisits > 0 ? Math.round((completedCount / totalVisits) * 100) : 0;

        const bouncedCount = allViews.filter(v => v.bounced).length;
        const bounceRate = totalVisits > 0 ? Math.round((bouncedCount / totalVisits) * 100) : 0;

        const totalShares = allViews.reduce((sum, v) => sum + v.shares, 0);
        const totalLinkClicks = allViews.reduce((sum, v) => sum + v.linkClicks, 0);
        const totalImageClicks = allViews.reduce((sum, v) => sum + v.imageClicks, 0);
        const totalCtaClicks = allViews.reduce((sum, v) => sum + v.ctaClicks, 0);

        const visitsWithClicks = allViews.filter(v =>
            (v.linkClicks ?? 0) > 0 || (v.imageClicks ?? 0) > 0 || (v.ctaClicks ?? 0) > 0
        ).length;
        const ctr = totalVisits > 0 ? Math.round((visitsWithClicks / totalVisits) * 100) : 0;

        const thresholds = [25, 50, 75, 100];
        const scrollDepthDistribution: Record<string, number> = {};
        for (const t of thresholds) {
            scrollDepthDistribution[String(t)] = totalVisits > 0
                ? Math.round((allViews.filter(v => v.scrollDepth >= t).length / totalVisits) * 100)
                : 0;
        }

        return {
            blog: blog ? { id: blog.id, title: blog.title, createdAt: blog.createdAt, introduction: blog.introduction, images: blog.images ?? [], tags: blog.BlogTags?.map(bt => bt.tag) ?? [] } : null,
            totalVisits,
            uniqueUsers: uniqueTotal,
            avgTimeSeconds: avgTime,
            avgScrollDepth,
            readPercentage,
            bounceRate,
            totalShares,
            ctr,
            scrollDepthDistribution,
            totalLinkClicks,
            totalImageClicks,
            totalCtaClicks,
        };
    }
    async deleteTag(id: string): Promise<boolean> {
        try {
            await this.prisma.tags.delete({
                where: { id },
            });
            return true;
        } catch (error) {
            return false;
        }
    }

    async getStatsOverview() {
        const blogCount = await this.prisma.blog.count();
        const signedViews = await this.prisma.blogView.findMany();
        const unsignedViews = await this.prisma.unsignedBlogView.findMany();
        const allViews = [...signedViews, ...unsignedViews];

        const totalVisits = allViews.length;
        const uniqueUsers = new Set(signedViews.map(v => v.UserId)).size;
        const uniqueIps = new Set(unsignedViews.map(v => v.ipAddress)).size;
        const avgTime = allViews.length > 0
            ? Math.round(allViews.reduce((sum, v) => sum + v.timeSpent, 0) / allViews.length)
            : 0;

        const blogVisits = new Map<string, number>();
        for (const v of signedViews) blogVisits.set(v.blogId, (blogVisits.get(v.blogId) ?? 0) + 1);
        for (const v of unsignedViews) blogVisits.set(v.blogId, (blogVisits.get(v.blogId) ?? 0) + 1);

        let topBlogId = '';
        let topVisits = 0;
        blogVisits.forEach((visits, id) => { if (visits > topVisits) { topVisits = visits; topBlogId = id; } });

        let topArticle: { id: string; title: string; visits: number } | null = null;
        if (topBlogId) {
            const blog = await this.prisma.blog.findUnique({ where: { id: topBlogId }, select: { id: true, title: true } });
            if (blog) topArticle = { id: blog.id, title: blog.title, visits: topVisits };
        }

        return { totalVisits, uniqueUsers: uniqueUsers + uniqueIps, avgTimeSeconds: avgTime, totalArticles: blogCount, topArticle };
    }

    async getStatsTimeline(months: number = 12) {
        const since = new Date();
        since.setMonth(since.getMonth() - months);
        const labels: string[] = [];
        const visitData: number[] = [];
        const readerData: number[] = [];
        const engagementData: number[] = [];

        const allSigned = await this.prisma.blogView.findMany({ where: { viewedAt: { gte: since } } });
        const allUnsigned = await this.prisma.unsignedBlogView.findMany({ where: { viewedAt: { gte: since } } });

        for (let i = months - 1; i >= 0; i--) {
            const d = new Date();
            d.setMonth(d.getMonth() - i);
            const year = d.getFullYear();
            const month = d.getMonth();
            const monthStart = new Date(year, month, 1);
            const monthEnd = new Date(year, month + 1, 0, 23, 59, 59);

            labels.push(d.toLocaleString('es-ES', { month: 'short' }));

            const s = allSigned.filter(v => v.viewedAt >= monthStart && v.viewedAt <= monthEnd);
            const u = allUnsigned.filter(v => v.viewedAt >= monthStart && v.viewedAt <= monthEnd);
            const monthViews = [...s, ...u];

            visitData.push(monthViews.length);

            const uniqueMonthUsers = new Set(s.map(v => v.UserId)).size + new Set(u.map(v => v.ipAddress)).size;
            readerData.push(uniqueMonthUsers);

            const comp = monthViews.filter(v => v.completed).length;
            engagementData.push(monthViews.length > 0 ? Math.round((comp / monthViews.length) * 100) : 0);
        }

        return { labels, visits: visitData, readers: readerData, engagement: engagementData };
    }

    async getStatsArticles() {
        const blogs = await this.prisma.blog.findMany({
            include: { BlogView: true, UnsignedBlogView: true },
            orderBy: { createdAt: 'desc' },
        });

        return blogs.map(blog => {
            const signed = blog.BlogView ?? [];
            const unsigned = blog.UnsignedBlogView ?? [];
            const allViews = [...signed, ...unsigned];
            const totalVisits = allViews.length;
            const avgTime = allViews.length > 0
                ? Math.round(allViews.reduce((s, v) => s + v.timeSpent, 0) / allViews.length)
                : 0;
            const completed = allViews.filter(v => v.completed).length;
            const engagementRate = totalVisits > 0 ? Math.round((completed / totalVisits) * 100) : 0;

            return { id: blog.id, title: blog.title, createdAt: blog.createdAt, totalVisits, avgTimeSeconds: avgTime, engagementRate };
        });
    }

    /**
     * Mapear objeto de Prisma a entidad Blog
     */
    private mapToBlogEntity(data: any): Blog {
        const blog = new Blog();
        blog.id = data.id;
        blog.title = data.title;
        blog.createdAt = data.createdAt;
        blog.updatedAt = data.updatedAt;
        blog.introduction = data.introduction;
        blog.tags = data.BlogTags?.map((bt: any) => ({ ...bt, tag: this.mapToTagsEntity(bt.tag), blogId: bt.blogId })) || [];
        blog.images = data.images?.map((img: any) => this.mapToBlogImageEntity(img)) || [];
        blog.blogContent = data.blogContent?.map((content: any) => this.mapToBlogContentEntity(content)) || [];
        blog.BlogView = data.BlogView?.map((view: any) => this.mapToBlogViewEntity(view)) || [];
        return blog;
    }

    /**
     * Mapear objeto de Prisma a entidad BlogImage
     */
    private mapToBlogImageEntity(data: any): BlogImage {
        const image = new BlogImage();
        image.id = data.id;
        image.link = data.link;
        image.publicId = data.publicId;
        image.position = data.position;
        image.blogId = data.blogId;
        image.blog = data.blog ? this.mapToBlogEntity(data.blog) : undefined;
        return image;
    }

    /**
     * Mapear objeto de Prisma a entidad BlogContent
     */
    private mapToBlogContentEntity(data: any): BlogContent {
        const content = new BlogContent();
        content.id = data.id;
        content.blogId = data.blogId;
        content.text = data.text;
        content.position = data.position;
        content.blog = data.blog ? this.mapToBlogEntity(data.blog) : undefined;
        return content;
    }

    /**
     * Mapear objeto de Prisma a entidad BlogView
     */
    private mapToBlogViewEntity(data: any): BlogView {
        const view = new BlogView();
        view.blogId = data.blogId;
        view.UserId = data.UserId;
        view.viewedAt = data.viewedAt;
        view.scrollDepth = data.scrollDepth ?? 0;
        view.timeSpent = data.timeSpent ?? 0;
        view.bounced = data.bounced ?? true;
        view.completed = data.completed ?? false;
        view.shares = data.shares ?? 0;
        view.linkClicks = data.linkClicks ?? 0;
        view.imageClicks = data.imageClicks ?? 0;
        view.ctaClicks = data.ctaClicks ?? 0;
        view.User = data.User;
        view.Blog = data.Blog ? this.mapToBlogEntity(data.Blog) : undefined;
        return view;
    }

    private mapToUnsignedBlogViewEntity(data: any): UnsignedBlogView {
        const view = new UnsignedBlogView();
        view.id = data.id;
        view.blogId = data.blogId;
        view.ipAddress = data.ipAddress;
        view.viewedAt = data.viewedAt;
        view.scrollDepth = data.scrollDepth ?? 0;
        view.timeSpent = data.timeSpent ?? 0;
        view.bounced = data.bounced ?? true;
        view.completed = data.completed ?? false;
        view.shares = data.shares ?? 0;
        view.linkClicks = data.linkClicks ?? 0;
        view.imageClicks = data.imageClicks ?? 0;
        view.ctaClicks = data.ctaClicks ?? 0;
        view.Blog = data.Blog ? this.mapToBlogEntity(data.Blog) : undefined;
        return view;
    }

    /**
     * Mapear objeto de Prisma a entidad Tags
     */
    private mapToTagsEntity(data: any): Tags {
        const tag = new Tags();
        tag.id = data.id;
        tag.name = data.name;
        tag.color = data.color;
        tag.bgColor = data.BgColor;
        return tag;
    }
}
