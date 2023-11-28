import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
} from '@nestjs/common';
import { CarService } from './car.service';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CarbookingDto } from './dto/carbooking.dto';
import { UpdatebookingDto } from './dto/updatebooking.dto';

@Controller('carbooking')
@ApiTags('CAR-BOOKING')
export class CarbookingController {
  constructor(private readonly carService: CarService) {}

  @Post('createbooking')
  @ApiOperation({ summary: 'enter  your details' })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        name: {
          type: 'string',
          example: 'xyz',
        },
        carmodel: {
          type: 'string',
          example: 'osam@.com',
        },
        city: {
          type: 'string',
          example: 'osam@.com',
        },
        date: {
          type: 'string',
          example: 'osam@.com',
        },
        car: {
          type: 'string',
          example: 'osam@.com',
        },
        user: {
          type: 'string',
          example: 'osam@.com',
        },

        string: {
          type: 'string',
          example: 'osam@.com',
        },
      },
    },
  })
  createbooking(
    @Param('id') id: string,
    @Body() carbookingDto: CarbookingDto,
    @Req() req,
  ) {
    return this.carService.createbooking(carbookingDto);
  }

  @Get()
  @ApiOperation({ summary: 'get all  your details' })
  findAllbooking() {
    return this.carService.findAllbooking();
  }
  @Get(':id')
  @ApiOperation({ summary: 'get  your details by Id' })
  findOnebooking(@Param('id') id: string) {
    return this.carService.findOnebooking(id);
  }

  @Patch(' updatebooking :id')
  @ApiOperation({ summary: 'update  your details' })
  updatebooking(
    @Param('id') id: string,
    @Body() updatebookingDto: UpdatebookingDto,
  ) {
    return this.carService.updatebooking(id, updatebookingDto);
  }

  @Delete(' deletebooking :id')
  @ApiOperation({ summary: 'delete  your details' })
  removebooking(@Param('id') id: string) {
    return this.carService.removebooking(id);
  }
}

// ............................car booking ends/.............................
