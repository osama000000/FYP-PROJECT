import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CarbookingService } from './carbooking.service';
import { CreateCarbookingDto } from './dto/create-carbooking.dto';
import { UpdateCarbookingDto } from './dto/update-carbooking.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('carbooking')
@ApiTags('CARS-BOOKING')
export class CarbookingController {
  constructor(private readonly carbookingService: CarbookingService) {}

  @Post()
  create(@Body() createCarbookingDto: CreateCarbookingDto) {
    return this.carbookingService.create(createCarbookingDto);
  }

  @Get()
  findAll() {
    return this.carbookingService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.carbookingService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCarbookingDto: UpdateCarbookingDto) {
    return this.carbookingService.update(+id, updateCarbookingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.carbookingService.remove(+id);
  }
}
