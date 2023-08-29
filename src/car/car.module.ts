import { Module } from '@nestjs/common';
import { CarService } from './car.service';
import { CarController } from './car.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Car, CarSchema } from './Schema/Cars';


@Module({
  imports:[MongooseModule.forFeature([{name:Car.name , schema: CarSchema}]),
],
  controllers: [CarController],
  providers: [CarService],
  exports:[CarService]
})
export class CarModule {}
