import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CarService } from './car.service';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
import { ApiTags } from '@nestjs/swagger';
import { Car } from './Schema/Cars';

@Controller('car')
@ApiTags('CARS')
export class CarController {
  constructor(private readonly carService: CarService) {}

  @Post()
  @Post()
  async createCar(@Body() createCarDto: CreateCarDto): Promise<Car> {
    const { model, brand } = createCarDto;
    const car = await this.carService.createCar(model, brand);
    return car; // Return the created car object
  }

 

  @Get()
  async getAllCars(): Promise<Car[]> {
    const cars = await this.carService.getAllCars();
    return cars;
  }
  

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.carService.findOne(id);
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
