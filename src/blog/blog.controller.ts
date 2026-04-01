import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { BlogService } from './blog.service';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';
import {
  CreateBlogContentDto,
  UpdateBlogContentDto,
  CreateBlogImageDto,
  UpdateBlogImageDto,
  CreateBlogViewDto,
  CreateTagsDto,
  UpdateTagsDto,
} from './dto';

@Controller('blogs')
export class BlogController {
  constructor(private readonly blogService: BlogService) { }

  /**
   * Crear un nuevo blog
   */
  @Post()
  create(@Body() createBlogDto: CreateBlogDto) {
    return this.blogService.create(createBlogDto);
  }

  /**
   * Obtener todos los blogs
   */
  @Get()
  findAll() {
    return this.blogService.findAll();
  }

  /**
   * Obtener un blog por ID
   */
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.blogService.findOne(id);
  }

  /**
   * Actualizar un blog
   */
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBlogDto: UpdateBlogDto) {
    return this.blogService.update(id, updateBlogDto);
  }

  /**
   * Eliminar un blog
   */
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.blogService.remove(id);
  }

  /**
   * Crear contenido de blog
   */
  @Post(':blogId/content')
  createContent(
    @Param('blogId') blogId: string,
    @Body() createContentDto: CreateBlogContentDto,
  ) {
    return this.blogService.createBlogContent(blogId, createContentDto);
  }

  /**
   * Actualizar contenido de blog
   */
  @Patch('content/:contentId')
  updateContent(
    @Param('contentId') contentId: string,
    @Body() updateContentDto: UpdateBlogContentDto,
  ) {
    return this.blogService.updateBlogContent(contentId, updateContentDto);
  }

  /**
   * Eliminar contenido de blog
   */
  @Delete('content/:contentId')
  removeContent(@Param('contentId') contentId: string) {
    return this.blogService.removeBlogContent(contentId);
  }

  /**
   * Crear imagen de blog
   */
  @Post(':blogId/images')
  createImage(
    @Param('blogId') blogId: string,
    @Body() createImageDto: CreateBlogImageDto,
  ) {
    return this.blogService.createBlogImage(blogId, createImageDto);
  }

  /**
   * Actualizar imagen de blog
   */
  @Patch('images/:imageId')
  updateImage(
    @Param('imageId') imageId: string,
    @Body() updateImageDto: UpdateBlogImageDto,
  ) {
    return this.blogService.updateBlogImage(imageId, updateImageDto);
  }

  /**
   * Eliminar imagen de blog
   */
  @Delete('images/:imageId')
  removeImage(@Param('imageId') imageId: string) {
    return this.blogService.removeBlogImage(imageId);
  }

  /**
   * Registrar vista de blog
   */
  @Post('views')
  recordView(@Body() createViewDto: CreateBlogViewDto) {
    return this.blogService.recordBlogView(createViewDto);
  }

  /**
   * Obtener vistas de un blog
   */
  @Get(':blogId/views')
  getBlogViews(@Param('blogId') blogId: string) {
    return this.blogService.getBlogViews(blogId);
  }

  /**
   * Obtener vistas del usuario actual
   */
  @Get('user/:userId/views')
  getUserViews(@Param('userId') userId: string) {
    return this.blogService.getUserViews(userId);
  }

  /**
   * Crear etiqueta
   */
  @Post('tags')
  createTag(@Body() createTagDto: CreateTagsDto) {
    return this.blogService.createTag(createTagDto);
  }

  /**
   * Obtener todas las etiquetas
   */
  @Get('tags/all')
  findAllTags() {
    return this.blogService.findAllTags();
  }

  /**
   * Actualizar etiqueta
   */
  @Patch('tags/:id')
  updateTag(
    @Param('id') id: string,
    @Body() updateTagDto: UpdateTagsDto,
  ) {
    return this.blogService.updateTag(id, updateTagDto);
  }

  /**
   * Eliminar etiqueta
   */
  @Delete('tags/:id')
  removeTag(@Param('id') id: string) {
    return this.blogService.removeTag(id);
  }
}
