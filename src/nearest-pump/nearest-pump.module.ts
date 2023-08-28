import { Module } from '@nestjs/common';
import { NearestPumpService } from './nearest-pump.service';
import { NearestPumpController } from './nearest-pump.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Pump, PumpSchema } from './Schema/pump';

@Module({
  imports:[MongooseModule.forFeature([{name: Pump.name, schema:PumpSchema}])],
  controllers: [NearestPumpController],
  providers: [NearestPumpService],
})
export class NearestPumpModule {}
