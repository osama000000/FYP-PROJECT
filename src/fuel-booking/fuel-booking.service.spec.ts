import { Test, TestingModule } from '@nestjs/testing';
import { FuelBookingService } from './fuel-booking.service';

describe('FuelBookingService', () => {
  let service: FuelBookingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FuelBookingService],
    }).compile();

    service = module.get<FuelBookingService>(FuelBookingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
