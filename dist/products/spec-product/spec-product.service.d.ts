import { SpecProductRepository } from './spec-product.repository';
import { CreateSpecProductDTO } from '../dto/create-sproduct.dto';
import { UpdateSpecProductDto } from '../dto/update-sproduct.dto';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';
export declare class SpecProductService {
    private variantRep;
    private cloudy;
    constructor(variantRep: SpecProductRepository, cloudy: CloudinaryService);
    create(createSpecProductDTO: CreateSpecProductDTO): Promise<SpecificProduct>;
    update(id: string, updateSpecProductDto: UpdateSpecProductDto): Promise<SpecificProduct>;
    delete(id: string): Promise<void>;
    findById(id: string): Promise<any>;
    findByGeneric(id: string): Promise<SpecificProduct[]>;
}
