import { ConflictException, Injectable } from '@nestjs/common';
import { SpecProductRepository } from './spec-product.repository';
import { CreateSpecProductDTO } from '../dto/create-sproduct.dto';
import { UpdateSpecProductDto } from '../dto/update-sproduct.dto';
import { Variant } from '../entities/product.entity';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';

@Injectable()
export class SpecProductService {

    constructor(private variantRep: SpecProductRepository, private cloudy: CloudinaryService) {

    }

    create(createSpecProductDTO: CreateSpecProductDTO) {
        return this.variantRep.createProduct(createSpecProductDTO);
    }

    async update(id: string, updateSpecProductDto: UpdateSpecProductDto) {
        const result = await this.variantRep.updateProduct(id, updateSpecProductDto) as { count: number };
        return result;
    }

    async delete(id: string) {
        const deleted = await this.variantRep.deleteProduct(id) as Variant;
        if (deleted) {
            deleted.images?.forEach(async (img) => {
                this.cloudy
            });
        }
    }

    findById(id: string) {
        return this.variantRep.findProductById(id);
    }

    findManyById(ids: string[]) {
        return this.variantRep.findManyById(ids);
    }

    findByGeneric(id: string) {
        return this.variantRep.findByGeneric(id);

    }



}
