import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseGuards } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { CreateSpecProductDTO } from './dto/create-sproduct.dto';
import { SpecProductService } from './spec-product/spec-product.service';
import { UpdateSpecProductDto } from './dto/update-sproduct.dto';
import { error } from 'console';
import { Categories } from './entities/product.entity';
import { ESLint } from 'eslint';
import { AdminGuard } from 'src/shared/guards/admin/admin.guard';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService, private readonly specProdService: SpecProductService) { }

  @UseGuards(AdminGuard)
  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }

  @Get('rnd/:num')
  findRandom(@Param('num') num: string) {
    return this.productsService.findRandom(+num);
  }

  @Get('productcat/:name')
  productByCategoryName(@Param('name') name: string) {
    return this.productsService.getProductByCategory(name)
  }

  @Get('finish')
  getFinishes() {
    return this.productsService.getFinishes();
  }

  @UseGuards(AdminGuard)
  @Delete('finish/:id')
  deleteFinish(@Param('id') id: string) {
    return this.productsService.deleteFinish(id);
  }

  @UseGuards(AdminGuard)
  @Delete('colors/:id')
  deleteColor(@Param('id') id: string) {
    return this.productsService.deleteColor(id);
  }

  @UseGuards(AdminGuard)
  @Post('finish')
  createFinish(@Body() data: any) {
    return this.productsService.createFinish(data);
  }
  @Get('categories')
  findCats() {
    return this.productsService.getCats();
  }
  @Get('colors')
  getColors() {
    return this.productsService.getColors();
  }

  @UseGuards(AdminGuard)
  @Post('colors')
  createColor(@Body() data: { image: string, name: string, public_id?: string }) {
    return this.productsService.createColor(data);
  }

  @Get()
  findAll(@Query('page') page: string, @Query('category') cat: string, @Query('search') search: string) {
    return page ? this.productsService.findAll({ category: cat, page: +page, search: search }) : this.productsService.findAll({ category: cat, search: search });
  }

  @Get('pages')
  findPage(@Query('category') cat: string, @Query('search') search: string) {
    const options = {
      categories: cat,
      search: search,
    };
    return cat ? this.productsService.getPages(options) : this.productsService.getPages();
  }

  @UseGuards(AdminGuard)
  @Post('add-variant')
  createVariant(@Body() createSpecProductDTO: CreateSpecProductDTO) {
    return this.specProdService.create(createSpecProductDTO);
  }


  @Get('variants/:id')
  getVatiansForProduct(@Param('id') id: string) {
    return this.specProdService.findByGeneric(id);
  }

  @Get('variant/:id')
  getVariant(@Param('id') id: string) {
    return this.specProdService.findById(id);
  }


  @UseGuards(AdminGuard)
  @Get('delete-variant/:id')
  deleteVaiant(@Param('id') id: string) {
    return this.specProdService.delete(id);
  }
  @Patch('update-variant/:id')
  updateVariant(@Param('id') id: string, @Body() data: UpdateSpecProductDto) {
    return this.specProdService.update(id, data);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productsService.findOne(id);
  }


  @UseGuards(AdminGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productsService.update(id, updateProductDto);
  }

  @UseGuards(AdminGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productsService.remove(id);
  }


}
