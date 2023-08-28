import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FuelAnalyticsService } from './fuel-analytics.service';
import { CreateFuelAnalyticDto } from './dto/create-fuel-analytic.dto';
import { UpdateFuelAnalyticDto } from './dto/update-fuel-analytic.dto';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('fuel-analytics')
@ApiTags('Analytics')
export class FuelAnalyticsController {
  constructor(private readonly fuelAnalyticsService: FuelAnalyticsService) {}

  @Post()
  @ApiOperation({summary:'Enter  your details'})
  @ApiBody({
    schema:{
      type: 'object',
      properties:{
     
        vehicletype:{
          type:'string',
          example: 'xyz', 
        },
        fueltype:{
          type:'string',
          example: 'osam@.com', 
        },
         price:{
          type:'string',
          example: 'asdfghj', 
        }, 
        expectations:{
          type:'string',
          example: '0987', 
        },
        
        
        
        }}})
  create(@Body() createFuelAnalyticDto: CreateFuelAnalyticDto) {
    return this.fuelAnalyticsService.create(createFuelAnalyticDto);
  }

  @Get()
  @ApiOperation({summary:'Get  all your details'})
  findAll() {
    return this.fuelAnalyticsService.findAll();
  }

  @Get(':id')
  @ApiOperation({summary:'Get   your details by id'})
  findOne(@Param('id') id: string) {
    return this.fuelAnalyticsService.findOne(id);
  }

  @Patch(':id')
   @ApiOperation({summary:'update  your details'})
   @ApiBody({
    schema:{
      type: 'object',
      properties:{
     
        vehicletype:{
          type:'string',
          example: 'xyz', 
        },
        fueltype:{
          type:'string',
          example: 'osam@.com', 
        },
         price:{
          type:'string',
          example: 'asdfghj', 
        }, 
        expectations:{
          type:'string',
          example: '0987', 
        },
        
        
        
        }}})
  update(@Param('id') id: string, @Body() updateFuelAnalyticDto: UpdateFuelAnalyticDto) {
    return this.fuelAnalyticsService.update(id, updateFuelAnalyticDto);
  }

  @Delete(':id')
  @ApiOperation({summary:'delete  your details'})
  remove(@Param('id') id: string) {
    return this.fuelAnalyticsService.remove(id);
  }
}
