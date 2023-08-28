import { Test, TestingModule } from '@nestjs/testing';
import { FuelAnalyticsController } from './fuel-analytics.controller';
import { FuelAnalyticsService } from './fuel-analytics.service';

describe('FuelAnalyticsController', () => {
  let controller: FuelAnalyticsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FuelAnalyticsController],
      providers: [FuelAnalyticsService],
    }).compile();

    controller = module.get<FuelAnalyticsController>(FuelAnalyticsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
