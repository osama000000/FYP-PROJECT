import { Controller, Get, Post, UseGuards ,Request } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiBody, ApiTags } from '@nestjs/swagger';

import { RoleGuard } from 'roleguard';
import { CONSTANTS } from 'constant';

@ApiTags('AUTHENTICATION/AUTHORIZATION')
@Controller('App')
@ApiBearerAuth()
export class AppController 
  {}

  // @Post('/login')
  // @UseGuards(AuthGuard("local"))
  // @ApiBody({
  //   schema:{
  //     type: 'object',
  //     properties:{
     
  //       email:{
  //         type:'string',
  //         example: 'User2', 
  //       },
  //       password:{
  //         type:'string',
  //         example: 'malik7890', 
  //       },
        
        
  //       }}})
 

  // @Get('/admin')
  // @UseGuards(AuthGuard("jwt"), new RoleGuard(CONSTANTS.ROLES.ADMIN))
  // adminData(@Request()req) :string{
  //   return "this is admin data" + JSON.stringify(req.user);
  // }
  
  // @Get('/Service-Provider')
  // @UseGuards(AuthGuard("jwt"), new RoleGuard(CONSTANTS.ROLES.SERVICE_PROVIDER))
  // ServiceProviderData(@Request()req) :string{
  //   return "this is provider data" + JSON.stringify(req.user) ;
  // }

  // @Get('/Service-User')
  // @UseGuards(AuthGuard("jwt"), new RoleGuard(CONSTANTS.ROLES.SERVICE_USER))
  // ServiceUserData(@Request()req) :string{
  //   return "this is user data" + JSON.stringify(req.user);
  // }

