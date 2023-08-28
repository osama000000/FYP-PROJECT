import { Test, TestingModule } from '@nestjs/testing';
import { CarbookingService } from './carbooking.service';

describe('CarbookingService', () => {
  let service: CarbookingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CarbookingService],
    }).compile();

    service = module.get<CarbookingService>(CarbookingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
