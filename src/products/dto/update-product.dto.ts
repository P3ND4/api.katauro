import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDto } from './create-product.dto';
import { UpdateSpecProductDto } from './update-sproduct.dto';
import { CreateSpecProductDTO } from './create-sproduct.dto';

export class UpdateProductDto extends PartialType(CreateProductDto) {
}
