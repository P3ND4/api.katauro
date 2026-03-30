import { Injectable } from '@nestjs/common';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';
import { BlogsRepository } from './repositories/blogs.repository';
import {
  CreateBlogContentDto,
  UpdateBlogContentDto,
  CreateBlogImageDto,
  UpdateBlogImageDto,
  CreateBlogViewDto,
  CreateTagsDto,
  UpdateTagsDto,
} from './dto';
import { Blog, BlogContent, BlogImage, BlogView, Tags } from './entities/index';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';

@Injectable()
export class BlogService {
  constructor(private readonly blogsRepository: BlogsRepository, private cloudinaryService: CloudinaryService) { }

  /**
   * Crear un nuevo blog con imágenes y contenido
   */
  async create(createBlogDto: CreateBlogDto): Promise<Blog> {

    for (const image of createBlogDto.images || []) {
      if (image.publicId) {
        const uploadResult = await this.cloudinaryService.moveImage(image.publicId, image.link);
        image.link = uploadResult.link;
        image.publicId = uploadResult.public_id;
      }
    }



    return await this.blogsRepository.createBlogWithContent(createBlogDto);
  }

  /**
   * Obtener todos los blogs
   */
  async findAll(): Promise<Blog[]> {
    return await this.blogsRepository.findAllBlogs();
  }

  /**
   * Obtener un blog por ID
   */
  async findOne(id: string): Promise<Blog | null> {
    return await this.blogsRepository.findBlogById(id);
  }

  /**
   * Actualizar un blog
   */
  async update(id: string, updateBlogDto: UpdateBlogDto): Promise<Blog> {
    return await this.blogsRepository.updateBlog(id, updateBlogDto);
  }

  /**
   * Eliminar un blog
   */
  async remove(id: string): Promise<boolean> {
    return await this.blogsRepository.deleteBlog(id);
  }

  /**
   * Crear contenido de blog
   */
  async createBlogContent(
    blogId: string,
    createContentDto: CreateBlogContentDto,
  ): Promise<BlogContent> {
    return await this.blogsRepository.createBlogContent(
      blogId,
      createContentDto,
    );
  }

  /**
   * Actualizar contenido de blog
   */
  async updateBlogContent(
    contentId: string,
    updateContentDto: UpdateBlogContentDto,
  ): Promise<BlogContent> {
    return await this.blogsRepository.updateBlogContent(
      contentId,
      updateContentDto,
    );
  }

  /**
   * Eliminar contenido de blog
   */
  async removeBlogContent(contentId: string): Promise<boolean> {
    return await this.blogsRepository.deleteBlogContent(contentId);
  }

  /**
   * Crear imagen de blog
   */
  async createBlogImage(
    blogId: string,
    createImageDto: CreateBlogImageDto,
  ): Promise<BlogImage> {
    return await this.blogsRepository.createBlogImage(blogId, createImageDto);
  }

  /**
   * Actualizar imagen de blog
   */
  async updateBlogImage(
    imageId: string,
    updateImageDto: UpdateBlogImageDto,
  ): Promise<BlogImage> {
    return await this.blogsRepository.updateBlogImage(imageId, updateImageDto);
  }

  /**
   * Eliminar imagen de blog
   */
  async removeBlogImage(imageId: string): Promise<boolean> {
    return await this.blogsRepository.deleteBlogImage(imageId);
  }

  /**
   * Registrar vista de blog
   */
  async recordBlogView(createViewDto: CreateBlogViewDto): Promise<BlogView> {
    return await this.blogsRepository.createBlogView(createViewDto);
  }

  /**
   * Obtener vistas de un blog
   */
  async getBlogViews(blogId: string): Promise<BlogView[]> {
    return await this.blogsRepository.getBlogViews(blogId);
  }

  /**
   * Obtener vistas de un usuario
   */
  async getUserViews(userId: string): Promise<BlogView[]> {
    return await this.blogsRepository.getUserBlogViews(userId);
  }

  /**
   * Crear etiqueta
   */
  async createTag(createTagDto: CreateTagsDto): Promise<Tags> {
    return await this.blogsRepository.createTag(createTagDto);
  }

  /**
   * Obtener todas las etiquetas
   */
  async findAllTags(): Promise<Tags[]> {
    return await this.blogsRepository.findAllTags();
  }

  /**
   * Actualizar etiqueta
   */
  async updateTag(id: string, updateTagDto: UpdateTagsDto): Promise<Tags> {
    return await this.blogsRepository.updateTag(id, updateTagDto);
  }

  /**
   * Eliminar etiqueta
   */
  async removeTag(id: string): Promise<boolean> {
    return await this.blogsRepository.deleteTag(id);
  }
}
