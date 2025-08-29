import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { CreateSpecProductDTO } from './dto/create-sproduct.dto';
import { SpecProductService } from './spec-product/spec-product.service';
import { UpdateSpecProductDto } from './dto/update-sproduct.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService, private readonly specProdService: SpecProductService) { }

  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }

  @Get()
  findAll() {
    return this.productsService.findAll();
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
}
