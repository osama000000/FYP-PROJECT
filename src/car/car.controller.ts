import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CarService } from './car.service';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('car')
@ApiTags('CAR')
export class CarController {
  constructor(private readonly carService: CarService) {}

  @Post('create')
  @ApiOperation({ summary: 'enter  your details' })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        carImage: {
          type: 'string',
          example: 'xyz',
        },
        name: {
          type: 'string',
          example: 'xyz',
        },
        model: {
          type: 'string',
          example: 'osam@.com',
        },
        condition: {
          type: 'string',
          example: 'xyz',
        },
        price: {
          type: 'string',
          example: 'xyz',
        },
        description: {
          type: 'string',
          example: 'xyz',
        },
        string: {
          type: 'string',
          example: 'osam@.com',
        },
      },
    },
  })
  create(@Body() createCarDto: CreateCarDto) {
    return this.carService.create(createCarDto);
  }

  @Get()
  @ApiOperation({ summary: 'get all  your details' })
  findAll() {
    return this.carService.findAll();
  }

  // ////
  @Get(':id')
  @ApiOperation({ summary: 'get  your details by Id' })
  findOne(@Param('id') id: string) {
    return this.carService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'update  your details' })
  update(@Param('id') id: string, @Body() updateCarDto: UpdateCarDto) {
    return this.carService.update(id, updateCarDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'delete  your details' })
  remove(@Param('id') id: string) {
    return this.carService.remove(id);
  }
}
// ......................................//////////////////////////////
