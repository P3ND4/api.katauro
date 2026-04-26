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
    async findBlogById(id) {
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
    async updateBlog(id, updateBlogDto) {
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
                    deleteMany: { blogId: id },
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
            },
        });
        return this.mapToTagsEntity(tag);
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
    mapToBlogEntity(data) {
        const blog = new blog_entity_1.Blog();
        blog.id = data.id;
        blog.title = data.title;
        blog.createdAt = data.createdAt;
        blog.updatedAt = data.updatedAt;
        blog.introduction = data.introduction;
        blog.tags = data.BlogTags?.map((bt) => ({ ...bt, tag: this.mapToTagsEntity(bt.tag), blogId: bt.blogId })) || [];
        blog.images = data.images?.map((img) => this.mapToBlogImageEntity(img)) || [];
        blog.blogContent = data.blogContent?.map((content) => this.mapToBlogContentEntity(content)) || [];
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
        view.User = data.User;
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