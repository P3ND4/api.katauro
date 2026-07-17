"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogsRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../shared/services/prisma/prisma.service");
const blog_entity_1 = require("../entities/blog.entity");
const blog_image_entity_1 = require("../entities/blog-image.entity");
const blog_view_entity_1 = require("../entities/blog-view.entity");
const unsigned_blog_view_entity_1 = require("../entities/unsigned-blog-view.entity");
const tags_entity_1 = require("../entities/tags.entity");
const blog_content_entity_1 = require("../entities/blog-content.entity");
let BlogsRepository = class BlogsRepository {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createBlogWithContent(createBlogDto) {
        const blog = await this.prisma.blog.create({
            data: {
                title: createBlogDto.title,
                introduction: createBlogDto.introduction,
                publishedDate: createBlogDto.publishedDate,
                draft: createBlogDto.draft ?? false,
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
    async findAllBlogs(options) {
        const tagIds = options?.tags ? options.tags.split(',').filter(t => t.trim()) : [];
        const shouldFilterPublished = options?.publishedOnly && !options?.includeDrafts;
        const blogs = await this.prisma.blog.findMany({
            include: {
                images: true,
                blogContent: true,
                BlogView: { include: { User: true } },
                BlogTags: { include: { tag: true } }
            },
            where: {
                ...(shouldFilterPublished ? {
                    draft: false,
                    OR: [
                        { publishedDate: { lte: new Date() } },
                        { publishedDate: null },
                    ],
                } : {}),
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
    async findBlogById(id, publishedOnly, includeDrafts) {
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
        if (!blog)
            return null;
        if (publishedOnly && !includeDrafts) {
            if (blog.draft)
                return null;
            if (blog.publishedDate && new Date(blog.publishedDate) > new Date())
                return null;
        }
        return this.mapToBlogEntity(blog);
    }
    async updateBlog(id, updateBlogDto) {
        const blog = await this.prisma.blog.update({
            where: { id },
            data: {
                title: updateBlogDto.title,
                introduction: updateBlogDto.introduction,
                publishedDate: updateBlogDto.publishedDate,
                draft: updateBlogDto.draft,
                blogContent: {
                    deleteMany: { blogId: id },
                    createMany: {
                        data: updateBlogDto.blogContent?.map((content) => ({
                            text: content.text,
                            position: content.position,
                        })) || []
                    },
                },
                BlogTags: {
                    deleteMany: { blogId: id },
                    createMany: {
                        data: updateBlogDto.tags?.map((tag) => ({ tagId: tag })) || [],
                    },
                },
                images: {
                    deleteMany: { blogId: id },
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
    async deleteBlog(id) {
        try {
            await this.prisma.blog.delete({
                where: { id },
            });
            return true;
        }
        catch (error) {
            return false;
        }
    }
    async createBlogContent(blogId, createContentDto) {
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
    async updateBlogContent(contentId, updateContentDto) {
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
    async deleteBlogContent(contentId) {
        try {
            await this.prisma.blogContent.delete({
                where: { id: contentId },
            });
            return true;
        }
        catch (error) {
            return false;
        }
    }
    async createBlogImage(blogId, createImageDto) {
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
    async updateBlogImage(imageId, updateImageDto) {
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
    async deleteBlogImage(imageId) {
        try {
            await this.prisma.blogImage.delete({
                where: { id: imageId },
            });
            return true;
        }
        catch (error) {
            return false;
        }
    }
    async createBlogView(createViewDto) {
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
    async getBlogViews(blogId) {
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
    async getUserBlogViews(userId) {
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
    async createTag(createTagDto) {
        const tag = await this.prisma.tags.create({
            data: {
                name: createTagDto.name,
                color: createTagDto.color,
                BgColor: createTagDto.bgColor,
            },
        });
        return this.mapToTagsEntity(tag);
    }
    async findAllTags() {
        const tags = await this.prisma.tags.findMany();
        return tags.map((tag) => this.mapToTagsEntity(tag));
    }
    async updateTag(id, updateTagDto) {
        const tag = await this.prisma.tags.update({
            where: { id },
            data: {
                name: updateTagDto.name,
                color: updateTagDto.color,
                BgColor: updateTagDto.bgColor,
            },
        });
        return this.mapToTagsEntity(tag);
    }
    async createUnsignedBlogView(createViewDto) {
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
    async updateSignedBlogViewMetrics(blogId, userId, metrics) {
        const data = {};
        if (metrics.scrollDepth !== undefined)
            data.scrollDepth = Math.max(metrics.scrollDepth, 0);
        if (metrics.timeSpent !== undefined)
            data.timeSpent = (data.timeSpent ?? 0) + metrics.timeSpent;
        if (metrics.bounced !== undefined)
            data.bounced = metrics.bounced;
        if (metrics.completed !== undefined)
            data.completed = metrics.completed;
        if (metrics.shares !== undefined)
            data.shares = (data.shares ?? 0) + metrics.shares;
        if (metrics.linkClicks !== undefined)
            data.linkClicks = (data.linkClicks ?? 0) + metrics.linkClicks;
        if (metrics.imageClicks !== undefined)
            data.imageClicks = (data.imageClicks ?? 0) + metrics.imageClicks;
        if (metrics.ctaClicks !== undefined)
            data.ctaClicks = (data.ctaClicks ?? 0) + metrics.ctaClicks;
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
    async updateUnsignedBlogViewMetrics(viewId, metrics) {
        const data = {};
        if (metrics.scrollDepth !== undefined)
            data.scrollDepth = Math.max(metrics.scrollDepth, 0);
        if (metrics.timeSpent !== undefined)
            data.timeSpent = (data.timeSpent ?? 0) + metrics.timeSpent;
        if (metrics.bounced !== undefined)
            data.bounced = metrics.bounced;
        if (metrics.completed !== undefined)
            data.completed = metrics.completed;
        if (metrics.shares !== undefined)
            data.shares = (data.shares ?? 0) + metrics.shares;
        if (metrics.linkClicks !== undefined)
            data.linkClicks = (data.linkClicks ?? 0) + metrics.linkClicks;
        if (metrics.imageClicks !== undefined)
            data.imageClicks = (data.imageClicks ?? 0) + metrics.imageClicks;
        if (metrics.ctaClicks !== undefined)
            data.ctaClicks = (data.ctaClicks ?? 0) + metrics.ctaClicks;
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
    async getBlogAnalytics(blogId) {
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
        const visitsWithClicks = allViews.filter(v => (v.linkClicks ?? 0) > 0 || (v.imageClicks ?? 0) > 0 || (v.ctaClicks ?? 0) > 0).length;
        const ctr = totalVisits > 0 ? Math.round((visitsWithClicks / totalVisits) * 100) : 0;
        const thresholds = [25, 50, 75, 100];
        const scrollDepthDistribution = {};
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
    async deleteTag(id) {
        try {
            await this.prisma.tags.delete({
                where: { id },
            });
            return true;
        }
        catch (error) {
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
        const blogVisits = new Map();
        for (const v of signedViews)
            blogVisits.set(v.blogId, (blogVisits.get(v.blogId) ?? 0) + 1);
        for (const v of unsignedViews)
            blogVisits.set(v.blogId, (blogVisits.get(v.blogId) ?? 0) + 1);
        let topBlogId = '';
        let topVisits = 0;
        blogVisits.forEach((visits, id) => { if (visits > topVisits) {
            topVisits = visits;
            topBlogId = id;
        } });
        let topArticle = null;
        if (topBlogId) {
            const blog = await this.prisma.blog.findUnique({ where: { id: topBlogId }, select: { id: true, title: true } });
            if (blog)
                topArticle = { id: blog.id, title: blog.title, visits: topVisits };
        }
        return { totalVisits, uniqueUsers: uniqueUsers + uniqueIps, avgTimeSeconds: avgTime, totalArticles: blogCount, topArticle };
    }
    async getStatsTimeline(months = 12) {
        const since = new Date();
        since.setMonth(since.getMonth() - months);
        const labels = [];
        const visitData = [];
        const readerData = [];
        const engagementData = [];
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
    mapToBlogEntity(data) {
        const blog = new blog_entity_1.Blog();
        blog.id = data.id;
        blog.title = data.title;
        blog.createdAt = data.createdAt;
        blog.updatedAt = data.updatedAt;
        blog.introduction = data.introduction;
        blog.publishedDate = data.publishedDate ?? undefined;
        blog.draft = data.draft ?? undefined;
        blog.tags = data.BlogTags?.map((bt) => ({ ...bt, tag: this.mapToTagsEntity(bt.tag), blogId: bt.blogId })) || [];
        blog.images = (data.images?.map((img) => this.mapToBlogImageEntity(img)) || []).sort((a, b) => a.position - b.position);
        blog.blogContent = (data.blogContent?.map((content) => this.mapToBlogContentEntity(content)) || []).sort((a, b) => a.position - b.position);
        blog.BlogView = data.BlogView?.map((view) => this.mapToBlogViewEntity(view)) || [];
        return blog;
    }
    mapToBlogImageEntity(data) {
        const image = new blog_image_entity_1.BlogImage();
        image.id = data.id;
        image.link = data.link;
        image.publicId = data.publicId;
        image.position = data.position;
        image.blogId = data.blogId;
        image.blog = data.blog ? this.mapToBlogEntity(data.blog) : undefined;
        return image;
    }
    mapToBlogContentEntity(data) {
        const content = new blog_content_entity_1.BlogContent();
        content.id = data.id;
        content.blogId = data.blogId;
        content.text = data.text;
        content.position = data.position;
        content.blog = data.blog ? this.mapToBlogEntity(data.blog) : undefined;
        return content;
    }
    mapToBlogViewEntity(data) {
        const view = new blog_view_entity_1.BlogView();
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
    mapToUnsignedBlogViewEntity(data) {
        const view = new unsigned_blog_view_entity_1.UnsignedBlogView();
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
    mapToTagsEntity(data) {
        const tag = new tags_entity_1.Tags();
        tag.id = data.id;
        tag.name = data.name;
        tag.color = data.color;
        tag.bgColor = data.BgColor;
        return tag;
    }
};
exports.BlogsRepository = BlogsRepository;
exports.BlogsRepository = BlogsRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], BlogsRepository);
//# sourceMappingURL=blogs.repository.js.map