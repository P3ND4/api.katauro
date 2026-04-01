import { Injectable, OnModuleInit } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductRepository } from './products.repository';
import { Categories, Product } from './entities/product.entity';
import { propRepository } from './CatRepository';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';

@Injectable()
export class ProductsService implements OnModuleInit {

  readonly CatParser = [
    Categories.footLumin,
    Categories.lightBulb,
    Categories.roofLumin,
    Categories.tableLumin,
    Categories.wallLumin
  ]
  constructor(private productRepository: ProductRepository, private propRep: propRepository, private cloudyService: CloudinaryService) { }
  onModuleInit() {
    this.propRep.seedBaseCategories();
  }

  async findRandom(num: number) {
    const products = await this.productRepository.findAllProducts() as Product[];
    const shuffled = products.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
  }

  async create(createProductDto: CreateProductDto) {
    createProductDto.variants = await Promise.all(createProductDto.variants.map(async x => {
      let varian = x
      varian.images = await Promise.all(x.images.map(async y => y.public_id ? await this.cloudyService.moveImage(y.public_id, y.link) : y))
      varian.image = varian.images[0].link;
      return varian
    }));

    let vector = createProductDto.vPublicId ? await this.cloudyService.moveImage(createProductDto.vPublicId, createProductDto.vector) : { link: createProductDto.vector, public_id: undefined }
    createProductDto.vector = vector.link
    createProductDto.vPublicId = vector.public_id
    return this.productRepository.createProduct(createProductDto);
  }

  async findAll(options?: { category?: string, search?: string, page?: number }) {
    var products = (await this.productRepository.findAllProducts()) as Product[];
    const len = products.length;
    const catList = options?.category ? options.category.split('-') : null;
    const categories = catList ? catList.map((cat) => this.CatParser[+cat]) : null;

    products = categories ? products.filter((p) => categories.includes((p as Product).category?.nombre as Categories)) : products;
    products = options?.search ? products.filter(p => p.name.toLowerCase().includes(options.search!.toLowerCase())) : products;
    const result = options?.page ? { products: products.slice((options.page - 1) * 9, (options.page - 1) * 9 + 9), total: len } : { products, total: len };
    return result;
  }

  async findPage(page: number) {
    const products = await this.productRepository.findAllProducts();
    return products.slice((page - 1) * 9, (page - 1) * 9 + 9)
  }

  //TODO: esto hay que mejorarlo para cualquier filtrado
  async getPages(options?: { category?: string, search?: string }) {
    var products = (await this.productRepository.findAllProducts()) as Product[];
    const catList = options?.category ? options.category.split('-') : null;
    const categories = catList ? catList.map((cat) => this.CatParser[+cat]) : null;

    products = categories ? products.filter((p) => categories.includes((p as Product).category?.nombre as Categories)) : products;
    products = options?.search ? products.filter(p => p.name.toLowerCase().includes(options.search!.toLowerCase())) : products;
    return products.length / 9 > 0 ? Math.ceil(products.length / 9) : 1;
  }

  findOne(id: string) {
    return this.productRepository.findProductById(id);
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    updateProductDto.variants = await Promise.all(updateProductDto.variants ? updateProductDto.variants.map(async x => {
      let varian = x
      varian.images = await Promise.all(x.images.map(async y => y.public_id ? await this.cloudyService.moveImage(y.public_id, y.link) : y))
      varian.image = varian.images[0].link;
      return varian
    }) : [])

    let vector = updateProductDto.vPublicId && updateProductDto.vector ? await this.cloudyService.moveImage(updateProductDto.vPublicId, updateProductDto.vector) : { link: updateProductDto.vector, public_id: undefined }
    updateProductDto.vector = vector.link
    updateProductDto.vPublicId = vector.public_id
    return this.productRepository.updateProduct(id, updateProductDto);
  }

  remove(id: string) {
    return this.productRepository.deleteProduct(id);
  }

  async getProductByCategory(name: string, page?: number) {
    var products = await this.productRepository.findAllProducts() as Product[]
    const names = name.split('-').map(n => this.CatParser[+n]);
    products = products.filter((prod) => names.includes(prod.category?.nombre as Categories));
    return page ? products.slice((page - 1) * 9, (page - 1) * 9 + 9) : products
  }

  async getCatByName(name: string) {
    return (await this.propRep.findCategories()).filter((cat) => cat.nombre === name);
  }

  async getCats() {
    return this.propRep.findCategories();
  }

  getFinishes() {
    return this.propRep.findFinishes();
  }

  async createFinish(data: { image: string, text: string, public_id?: string }) {
    let cloudUpdate = data.public_id ? await this.cloudyService.moveImage(data.public_id, data.image) : { link: data.image, public_id: undefined };
    data.image = cloudUpdate.link;
    data.public_id = cloudUpdate.public_id;
    return this.propRep.addFinish(data);
  }

  deleteFinish(id: string) {
    return this.propRep.deleteFinish(id);
  }

  getColors() {
    return this.propRep.findColors();
  }

  async createColor(data: { image: string, name: string, public_id?: string }) {
    let cloudUpdate = data.public_id ? await this.cloudyService.moveImage(data.public_id, data.image) : { link: data.image, public_id: undefined };
    data.image = cloudUpdate.link;
    data.public_id = cloudUpdate.public_id;
    return this.propRep.addColor(data);
  }

  deleteColor(id: string) {
    return this.propRep.deleteColor(id);
  }

}
