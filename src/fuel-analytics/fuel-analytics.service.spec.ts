import { Test, TestingModule } from '@nestjs/testing';
import { FuelAnalyticsService } from './fuel-analytics.service';

describe('FuelAnalyticsService', () => {
  let service: FuelAnalyticsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FuelAnalyticsService],
    }).compile();

    service = module.get<FuelAnalyticsService>(FuelAnalyticsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
