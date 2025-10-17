import { CreateProductDto } from './create-product.dto';
import { UpdateSpecProductDto } from './update-sproduct.dto';
declare const UpdateProductDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateProductDto>>;
export declare class UpdateProductDto extends UpdateProductDto_base {
    variantUpdate: UpdateSpecProductDto[];
}
export {};
