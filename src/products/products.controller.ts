import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { CreateSpecProductDTO } from './dto/create-sproduct.dto';
import { SpecProductService } from './spec-product/spec-product.service';
import { UpdateSpecProductDto } from './dto/update-sproduct.dto';
import { error } from 'console';
import { Categories } from './entities/product.entity';
import { ESLint } from 'eslint';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService, private readonly specProdService: SpecProductService) { }

  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }

  @Get('productcat/:name')
  productByCategoryName(@Param('name') name: string) {
    return this.productsService.getProductByCategory([name])
  }

  @Get('finish')
  getFinishes() {
    return this.productsService.getFinishes();
  }
  @Delete('finish/:id')
  deleteFinish(@Param('id') id: string) {
    return this.productsService.deleteFinish(id);
  }
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
  @Post('colors')
  createColor(@Body() data: { image: string, name: string }) {
    return this.productsService.createColor(data);
  }

  @Get()
  findAll(@Query('page') page: string, @Query('category') cat: string, @Body() filters?: {categories: Categories[]}) {
    try {
      if(filters){
        return page? this.productsService.getProductByCategory(filters.categories, +page) : this.productsService.getProductByCategory(filters.categories);
      }
      
      else if (page && !cat) {
        return this.productsService.findPage(+page)
      }
      else if (cat) {
        return page ? this.productsService.getProductByCategory([cat], +page) : this.productsService.getProductByCategory([cat]);
      }
      return this.productsService.findAll();
    }
    catch (err) {
      return error;
    }
  }

  @Get('pages')
  findPage(@Query('category') cat: Categories) {
    return cat ? this.productsService.getPages([cat]) : this.productsService.getPages([]);
  }


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

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productsService.update(id, updateProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productsService.remove(id);
  }

  @Delete('colors/:id')
  deleteColor(@Param('id') id: string) {
    return this.productsService.deleteColor(id);
  }
}
