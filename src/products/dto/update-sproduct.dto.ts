import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDto } from './create-product.dto';
import { CreateSpecProductDTO } from './create-sproduct.dto';

export class UpdateSpecProductDto extends PartialType(CreateSpecProductDTO) {}
