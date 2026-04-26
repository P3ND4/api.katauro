import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Query,
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
import { AdminGuard } from 'src/shared/guards/admin/admin.guard';
import { OwnerGuard } from 'src/shared/guards/ouwner/owner.guard';

@Controller('blogs')
export class BlogController {
  constructor(private readonly blogService: BlogService) { }

  /**
   * Crear un nuevo blog
   */
  @UseGuards(AdminGuard)
  @Post()
  create(@Body() createBlogDto: CreateBlogDto) {
    return this.blogService.create(createBlogDto);
  }

  /**
   * Obtener todos los blogs con filtros opcionales y paginación
   * @param sortBy 'asc' para más antiguos primero, 'desc' para más recientes primero
   * @param tags IDs de tags separados por comas para filtrar
   * @param search Búsqueda por título de blog
   * @param page Número de página para paginación (9 blogs por página)
   */
  @Get()
  findAll(@Query('sortBy') sortBy?: string, @Query('tags') tags?: string, @Query('search') search?: string, @Query('page') page?: string) {
    return this.blogService.findAll({ sortBy, tags, search, page: page ? +page : undefined });
  }

  /**
   * Obtener el número total de páginas
   */
  @Get('pages/total')
  findPages(@Query('tags') tags?: string, @Query('search') search?: string) {
    return this.blogService.getPages({ tags, search });
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
  @UseGuards(AdminGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBlogDto: UpdateBlogDto) {
    return this.blogService.update(id, updateBlogDto);
  }

  /**
   * Eliminar un blog
   */
  @UseGuards(AdminGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.blogService.remove(id);
  }

  /**
   * Crear contenido de blog
   */
  @UseGuards(AdminGuard)
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
  @UseGuards(AdminGuard)
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
  @UseGuards(AdminGuard)
  @Delete('content/:contentId')
  removeContent(@Param('contentId') contentId: string) {
    return this.blogService.removeBlogContent(contentId);
  }

  /**
   * Crear imagen de blog
   */
  @UseGuards(AdminGuard)
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
  @UseGuards(AdminGuard)
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
  @UseGuards(AdminGuard)
  @Delete('images/:imageId')
  removeImage(@Param('imageId') imageId: string) {
    return this.blogService.removeBlogImage(imageId);
  }

  /**
   * Registrar vista de blog
   */
  @UseGuards(OwnerGuard)
  @Post('views/:id')
  recordView(@Body() createViewDto: CreateBlogViewDto, @Param('id') userId: string) {
    createViewDto.UserId = userId;
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
