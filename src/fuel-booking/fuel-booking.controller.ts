import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { FuelBookingService } from './fuel-booking.service';
import { CreateFuelBookingDto } from './dto/create-fuel-booking.dto';
import { UpdateFuelBookingDto } from './dto/update-fuel-booking.dto';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('fuel-booking')
@ApiTags('FuelBooking')
export class FuelBookingController {
  constructor(private readonly fuelBookingService: FuelBookingService) {}

  @Post()
  @ApiOperation({ summary: 'Enter  your details' })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        location: {
          type: 'string',
          example: 'i8/2',
        },
        fueltype: {
          type: 'string',
          example: 'high octane',
        },
        litre: {
          type: 'string',
          example: '5 litres',
        },
        paymentMethod: {
          type: 'string',
          example: 'cash',
        },
        price: {
          type: 'string',
          example: 'cash',
        },
        userId: {
          type: 'string',
          example: 'cash',
        },
      },
    },
  })
  create(
    @Param('id') id: string,
    @Body() createFuelBookingDto: CreateFuelBookingDto,
  ) {
    return this.fuelBookingService.create(createFuelBookingDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all your details' })
  findAll() {
    return this.fuelBookingService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get your details by Id' })
  findOne(@Param('id') id: string) {
    return this.fuelBookingService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update  your details' })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        location: {
          type: 'string',
          example: 'i8/2',
        },
        fueltype: {
          type: 'string',
          example: 'high octane',
        },
        litre: {
          type: 'string',
          example: '5 litres',
        },
        paymentMethod: {
          type: 'string',
          example: 'cash',
        },
        price: {
          type: 'string',
          example: 'cash',
        },
        userId: {
          type: 'string',
          example: 'cash',
        },
        status: {
          type: 'string',
          example: 'cash',
        },
      },
    },
  })
  update(
    @Param('id') id: string,
    @Body() updateFuelBookingDto: UpdateFuelBookingDto,
  ) {
    return this.fuelBookingService.update(id, updateFuelBookingDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete your details' })
  remove(@Param('id') id: string) {
    return this.fuelBookingService.remove(id);
  }
}
