import { Test, TestingModule } from '@nestjs/testing';
import { NearestPumpController } from './nearest-pump.controller';
import { NearestPumpService } from './nearest-pump.service';

describe('NearestPumpController', () => {
  let controller: NearestPumpController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NearestPumpController],
      providers: [NearestPumpService],
    }).compile();

    controller = module.get<NearestPumpController>(NearestPumpController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
