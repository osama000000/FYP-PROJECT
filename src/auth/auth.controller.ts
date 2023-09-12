import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UpdateSignUpProviderDto } from './dto/update-auth.dto';
import { SignUpProviderDto } from './dto/signupProviderDto';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';
import { SignUpUserDto } from './dto/signUpUserDto';
import { Login } from './dto/logindto';


@Controller('auth')
@ApiTags('User-Authentication')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/signUpProviderDto')
  @ApiOperation({summary:'update  your details'})
  @ApiBody({
   schema:{
     type: 'object',
     properties:{
    
       username:{
         type:'string',
         example: 'xyz', 
       },
       email:{
         type:'string',
         example: 'osam@.com', 
       },
        phone:{
         type:'string',
         example: 'asdfghj', 
       }, 
       address:{
         type:'string',
         example: '0987', 
       },
       cnic:{
        type:'string',
        example: '0987', 
      },
       password:{
        type:'string',
        example: '0987', 
      },
      
      services:{
        type:'string',
        example: '0987', 
      },
      
       
       
       
       }}})
  create(@Body() signUpProviderDto: SignUpProviderDto) {
    return this.authService.create(signUpProviderDto);
  }

  @Post('/signUpUserDto')
  @ApiOperation({summary:'update  your details'})
  @ApiBody({
   schema:{
     type: 'object',
     properties:{
    
       username:{
         type:'string',
         example: 'xyz', 
       },
       email:{
         type:'string',
         example: 'osam@.com', 
       },
        phone:{
         type:'string',
         example: 'asdfghj', 
       }, 
       address:{
         type:'string',
         example: '0987', 
       },
       cnic:{
        type:'string',
        example: '0987', 
      },
       password:{
        type:'string',
        example: '0987', 
      },
    
       
       }}})
  createUser(@Body() signUpUserDto: SignUpUserDto) {
    return this.authService.createUser(signUpUserDto);
  }


  @Post('/UserLogin')
  @ApiOperation({summary:'enter  your details'})
  @ApiBody({
   schema:{
     type: 'object',
     properties:{
    
      
       email:{
         type:'string',
         example: 'osam@.com', 
       },
     
       password:{
        type:'string',
        example: '0987', 
      },
    
       
       }}})

  loginUser(@Body() login: Login) {
    return this.authService.loginUser(login);
  }


  @Get()
  findAll() {
    return this.authService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.authService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSignUpProviderDto: UpdateSignUpProviderDto) {
    return this.authService.update(id, updateSignUpProviderDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.authService.remove(id);
  }

  
}
