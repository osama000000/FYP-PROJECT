import { Module } from '@nestjs/common';
import { CarwashService } from './carwash.service';
import { CarwashController } from './carwash.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Carwash, CarwashSchema } from './Schema/caewash';

@Module({
  imports:[MongooseModule.forFeature([{name:Carwash.name, schema:CarwashSchema}])],
  controllers: [CarwashController],
  providers: [CarwashService],
})
export class CarwashModule {}
