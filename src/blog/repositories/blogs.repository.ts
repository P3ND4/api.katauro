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
    CreateTagsDto,
    UpdateTagsDto,
} from '../dto';
import { Blog } from '../entities/blog.entity';
import { BlogImage } from '../entities/blog-image.entity';
import { BlogView } from '../entities/blog-view.entity';
import { Tags } from '../entities/tags.entity';
import { BlogContent } from '../entities/blog-content.entity';

@Injectable()
export class BlogsRepository {
    constructor(private readonly prisma: PrismaService) { }

    /**
     * Crear un blog con su contenido e imágenes asociadas
     */
    async  createBlogWithContent(createBlogDto: CreateBlogDto): Promise<Blog> {
        const blog = await this.prisma.blog.create({
            data: {
                title: createBlogDto.title,
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
     * Obtener todos los blogs
     */
    async findAllBlogs(): Promise<Blog[]> {
        const blogs = await this.prisma.blog.findMany({
            include: {
                images: true,
                blogContent: true,
                BlogView: { include: { User: true } },
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
     * Eliminar etiqueta
     */
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

    /**
     * Mapear objeto de Prisma a entidad Blog
     */
    private mapToBlogEntity(data: any): Blog {
        const blog = new Blog();
        blog.id = data.id;
        blog.title = data.title;
        blog.createdAt = data.createdAt;
        blog.updatedAt = data.updatedAt;
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
        view.User = data.User;
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
        return tag;
    }
}
