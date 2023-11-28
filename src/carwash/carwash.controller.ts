import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CarwashService } from './carwash.service';
import { CreateCarwashDto } from './dto/create-carwash.dto';
import { UpdateCarwashDto } from './dto/update-carwash.dto';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('carwash')
@ApiTags('CAR-WASH')
export class CarwashController {
  constructor(private readonly carwashService: CarwashService) {}

  @Post()
  @ApiOperation({ summary: 'Enter  your details' })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        location: {
          type: 'string',
          example: 'xyz',
        },
        cartype: {
          type: 'string',
          example: 'osam@.com',
        },
        servicetype: {
          type: 'string',
          example: 'asdfghj',
        },
        price: {
          type: 'string',
          example: 'asdfghj',
        },
        userId: {
          type: 'string',
          example: 'asdfghj',
        },
        status: {
          type: 'string',
          example: 'asdfghj',
        },
      },
    },
  })
  create(@Body() createCarwashDto: CreateCarwashDto) {
    return this.carwashService.create(createCarwashDto);
  }

  @Get()
  @ApiOperation({ summary: 'get all  your details' })
  findAll() {
    return this.carwashService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'get  your  by id ' })
  findOne(@Param('id') id: string) {
    return this.carwashService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'update  your details' })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        location: {
          type: 'string',
          example: 'xyz',
        },
        cartype: {
          type: 'string',
          example: 'osam@.com',
        },
        servicetype: {
          type: 'string',
          example: 'asdfghj',
        },
      },
    },
  })
  update(@Param('id') id: string, @Body() updateCarwashDto: UpdateCarwashDto) {
    return this.carwashService.update(id, updateCarwashDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'delete  your details' })
  remove(@Param('id') id: string) {
    return this.carwashService.remove(id);
  }
}
