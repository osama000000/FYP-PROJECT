import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('user')
@ApiTags('Users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @ApiOperation({summary:'Enter  your details'})
  @ApiBody({
    schema:{
      type: 'object',
      properties:{
     
        name:{
          type:'string',
          example: 'xyz', 
        },
        email:{
          type:'string',
          example: 'osam@.com', 
        },
         address:{
          type:'string',
          example: 'asdfghj', 
        }, 
        phnumber:{
          type:'string',
          example: '0987', 
        },
        password:{
          type:'string',
          example: 'malik8990', 
        },
        
        
        }}})
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({summary:'Enter  your details'})
  @ApiBody({
    schema:{
      type: 'object',
      properties:{
     
        name:{
          type:'string',
          example: 'xyz', 
        },
        email:{
          type:'string',
          example: 'osam@.com', 
        },
         address:{
          type:'string',
          example: 'asdfghj', 
        }, 
        phnumber:{
          type:'string',
          example: '0987', 
        },
        password:{
          type:'string',
          example: 'malik8990', 
        },
        
        
        }}})
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(id);
  }
}
