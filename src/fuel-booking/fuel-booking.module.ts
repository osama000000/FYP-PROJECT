import { Module } from '@nestjs/common';
import { FuelBookingService } from './fuel-booking.service';
import { FuelBookingController } from './fuel-booking.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Fuelbook, FuelbookSchema } from './Schema/Fuelbook';

@Module({
  imports:[MongooseModule.forFeature([{name: Fuelbook.name , schema:FuelbookSchema}]),
 ],

 controllers: [FuelBookingController, ],
  providers: [FuelBookingService, ],
})
export class FuelBookingModule {}
