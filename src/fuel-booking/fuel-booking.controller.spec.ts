import { Test, TestingModule } from '@nestjs/testing';
import { FuelBookingController } from './fuel-booking.controller';
import { FuelBookingService } from './fuel-booking.service';

describe('FuelBookingController', () => {
  let controller: FuelBookingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FuelBookingController],
      providers: [FuelBookingService],
    }).compile();

    controller = module.get<FuelBookingController>(FuelBookingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
