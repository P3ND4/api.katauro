import { Test, TestingModule } from '@nestjs/testing';
import { SpecProductService } from './spec-product.service';

describe('SpecProductService', () => {
  let service: SpecProductService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SpecProductService],
    }).compile();

    service = module.get<SpecProductService>(SpecProductService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
