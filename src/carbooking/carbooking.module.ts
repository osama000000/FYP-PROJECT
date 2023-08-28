import { Module } from '@nestjs/common';
import { CarbookingService } from './carbooking.service';
import { CarbookingController } from './carbooking.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Carbook, CarbookSchema } from './Schema/carbook';


@Module({
  imports:[MongooseModule.forFeature([{name: Carbook.name, schema:CarbookSchema}])],
  controllers: [CarbookingController],
  providers: [CarbookingService],
})
export class CarbookingModule {}
