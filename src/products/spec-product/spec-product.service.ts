import { Injectable } from '@nestjs/common';
import { SpecProductRepository } from './spec-product.repository';
import { CreateSpecProductDTO } from '../dto/create-sproduct.dto';
import { UpdateSpecProductDto } from '../dto/update-sproduct.dto';

@Injectable()
export class SpecProductService {

    constructor(private variantRep: SpecProductRepository){

    }

    create(createSpecProductDTO: CreateSpecProductDTO){
        return this.variantRep.createProduct(createSpecProductDTO);
    }

    update(id: string,updateSpecProductDto: UpdateSpecProductDto){
        return this.variantRep.updateProduct(id, updateSpecProductDto);
    }

    delete(id: string){
        return this.variantRep.deleteProduct(id);
    }

    findById(id: string){
       return this.variantRep.findProductById(id);
    }

    findByGeneric(id: string){
        return this.variantRep.findByGeneric(id);

    }

    

}
