import { Test, TestingModule } from '@nestjs/testing';
import { NearestPumpService } from './nearest-pump.service';

describe('NearestPumpService', () => {
  let service: NearestPumpService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NearestPumpService],
    }).compile();

    service = module.get<NearestPumpService>(NearestPumpService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
