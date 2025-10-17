import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDto } from './create-product.dto';
import { UpdateSpecProductDto } from './update-sproduct.dto';

export class UpdateProductDto extends PartialType(CreateProductDto) {
    variantUpdate: UpdateSpecProductDto[];
}
