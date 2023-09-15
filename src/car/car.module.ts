import { Module } from '@nestjs/common';
import { CarService } from './car.service';
import { CarController } from './car.controller';
import { Mongoose } from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { Car, CarSchema } from './Schema/car';
import { Carbooking, CarbookingSchema } from './Schema/carbooking';
import { CarbookingController } from './booking.controller';

@Module({
  imports:[MongooseModule.forFeature([{name: Car.name, schema:CarSchema}]),
     MongooseModule.forFeature([{name:Carbooking.name, schema: CarbookingSchema}])],
  controllers: [CarController,CarbookingController],
  providers: [CarService],
})
export class CarModule {}
