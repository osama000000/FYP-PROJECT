import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { NearestPumpService } from './nearest-pump.service';
import { CreateNearestPumpDto } from './dto/create-nearest-pump.dto';
import { UpdateNearestPumpDto } from './dto/update-nearest-pump.dto';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('nearest-pump')
@ApiTags('Nearest-Pump')
export class NearestPumpController {
  constructor(private readonly nearestPumpService: NearestPumpService) {}

  @Post()
  @ApiOperation({summary:'Enter  your details'})
  @ApiBody({
    schema:{
      type: 'object',
      properties:{
     
        location:{
          type:'string',
          example: 'h8-isb', 
        },
        name:{
          type:'string',
          example: 'shell', 
        },
        
        
        
        }}})
  create(@Body() createNearestPumpDto: CreateNearestPumpDto) {
    return this.nearestPumpService.create(createNearestPumpDto);
  }

  @Get()
  @ApiOperation({summary:'Get all your details'})
  findAll() {
    return this.nearestPumpService.findAll();
  }

  @Get(':id')
  @ApiOperation({summary:'Get your details by id'})
  findOne(@Param('id') id: string) {
    return this.nearestPumpService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({summary:'Update your details  by id'})
  @ApiBody({
    schema:{
      type: 'object',
      properties:{
     
        location:{
          type:'string',
          example: 'h8-isb', 
        },
        name:{
          type:'string',
          example: 'shell', 
        },
        
        
        
        }}})
  update(@Param('id') id: string, @Body() updateNearestPumpDto: UpdateNearestPumpDto) {
    return this.nearestPumpService.update(id, updateNearestPumpDto);
  }

  @Delete(':id')
  @ApiOperation({summary:'Delete your details by id'})
  remove(@Param('id') id: string) {
    return this.nearestPumpService.remove(id);
  }
}
