import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MaintenanceService } from './maintenance.service';
import { CreateMaintenanceDto } from './dto/create-maintenance.dto';
import { UpdateMaintenanceDto } from './dto/update-maintenance.dto';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('maintenance')
@ApiTags('Maintenance')
export class MaintenanceController {
  constructor(private readonly maintenanceService: MaintenanceService) {}

  @Post()
  @ApiOperation({ summary: 'Enter  your details' })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        vehicletype: {
          type: 'string',
          example: 'xyz',
        },
        servicetype: {
          type: 'string',
          example: 'osam@.com',
        },

        location: {
          type: 'string',
          example: '0987',
        },
        description: {
          type: 'string',
          example: 'malik8990',
        },
        status: {
          type: 'string',
          example: 'malik8990',
        },
      },
    },
  })
  create(@Body() createMaintenanceDto: CreateMaintenanceDto) {
    return this.maintenanceService.create(createMaintenanceDto);
  }

  @Get()
  @ApiOperation({ summary: 'get all your details' })
  findAll() {
    return this.maintenanceService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'get  your details by id' })
  findOne(@Param('id') id: string) {
    return this.maintenanceService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'update  your details' })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        mechanictype: {
          type: 'string',
          example: 'xyz',
        },
        servicetype: {
          type: 'string',
          example: 'osam@.com',
        },

        nearestmechanic: {
          type: 'string',
          example: '0987',
        },
        description: {
          type: 'string',
          example: 'malik8990',
        },
      },
    },
  })
  update(
    @Param('id') id: string,
    @Body() updateMaintenanceDto: UpdateMaintenanceDto,
  ) {
    return this.maintenanceService.update(id, updateMaintenanceDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'delete your details' })
  remove(@Param('id') id: string) {
    return this.maintenanceService.remove(id);
  }
}
