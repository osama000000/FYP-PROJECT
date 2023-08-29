import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { CarService } from './car.service';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { Car } from './Schema/Cars';
import { Booking } from './Schema/booking.interface';

@Controller('car')
@ApiTags('CARS')
export class CarController {
  constructor(private readonly carService: CarService) {}


  @Post(':carId/book')
  @ApiBody({
    schema:{
      type: 'object',
      properties:{
     
        model:{
          type:'string',
          example: 'xyz', 
        },
        brand:{
          type:'string',
          example: 'osam@.com', 
        },
         isAvailable:{
          type:'string',
          example: 'asdfghj', 
        }, 
      
        
        
        }}})

        @Post(':carId/book')
        async bookCar(
          @Param('carId') carId: string,
          @Body('startDate') startDate: Date,
          @Body('endDate') endDate: Date
        ): Promise<Booking> {
          return this.carService.bookCar(carId, startDate, endDate);
        }
      
        @Delete(':carId/bookings/:bookingId')
        async cancelBooking(@Param('bookingId') bookingId: string): Promise<void> {
          return this.carService.cancelBooking(bookingId);
        }
 
  @Get()
  async getAllCars(): Promise<Car[]> {
    const cars = await this.carService.getAllCars();
    return cars;
  }
  @Get(':carId/bookings')
  async getBookingsByCarId(@Param('carId') carId: string): Promise<Booking[]> {
    return this.carService.getBookingsByCarId(carId);
  }
  
  @Get('bookings')
  async getBookingsByTimePeriod(
    @Query('startDate') startDate: Date,
    @Query('endDate') endDate: Date
  ): Promise<Booking[]> {
    return this.carService.getBookingsByTimePeriod(startDate, endDate);
  }
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCarDto: UpdateCarDto) {
    return this.carService.update(+id, updateCarDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.carService.remove(+id);
  }
}
