import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  ValidationPipe,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { UpdateSignUpProviderDto } from './dto/update-auth.dto';
import { SignUpProviderDto } from './dto/signupProviderDto';
import { ApiBearerAuth, ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';
import { SignUpUserDto } from './dto/signUpUserDto';
import { Login } from './dto/logindto';
import { AuthGuard } from '@nestjs/passport';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { v4 as uuidv4 } from 'uuid';
import path from 'path';
import { Observable, of } from 'rxjs';
@Controller('auth')
@ApiBearerAuth()
@ApiTags('User-Authentication')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/signUpProviderDto')
  @ApiOperation({ summary: 'update  your details' })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        profileImage: {
          type: 'string',
          example: 'optional',
        },

        fullName: {
          type: 'string',
          example: 'xyz',
        },
        email: {
          type: 'string',
          example: 'osam@.com',
        },
        date: {
          type: 'string',
          example: 'osam@.com',
        },
        cnic: {
          type: 'string',
          example: '0987',
        },
        phoneNumber: {
          type: 'string',
          example: 'asdfghj',
        },
        address: {
          type: 'string',
          example: '0987',
        },

        password: {
          type: 'string',
          example: '0987',
        },

        services: {
          type: 'string',
          example: '0987',
        },
      },
    },
  })
  signupprovider(@Body(ValidationPipe) signUpProviderDto: SignUpProviderDto) {
    return this.authService.signupprovider(signUpProviderDto);
  }

  // .................................................................///////
  @Post('/signUpUserDto')
  @ApiOperation({ summary: 'update  your details' })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        profileImage: {
          type: 'string',
          example: 'optional',
        },
        fullName: {
          type: 'string',
          example: 'xyz',
        },
        email: {
          type: 'string',
          example: 'osam@.com',
        },
        date: {
          type: 'string',
          example: 'osam@.com',
        },
        cnic: {
          type: 'string',
          example: '0987',
        },
        phoneNumber: {
          type: 'string',
          example: 'asdfghj',
        },
        address: {
          type: 'string',
          example: '0987',
        },

        password: {
          type: 'string',
          example: '0987',
        },
      },
    },
  })
  @UseInterceptors(FileInterceptor('profileImage'))
  async signupuser(
    @UploadedFile() file,
    @Body(ValidationPipe) signUpUserDto: SignUpUserDto,
  ) {
    // You can use the actual filename if it varies

    return this.authService.signupuser(signUpUserDto);
  }
  // ......................user.......................................

  @Post('/UserLogin')
  @ApiOperation({ summary: 'enter  your details' })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        email: {
          type: 'string',
          example: 'osam@.com',
        },

        password: {
          type: 'string',
          example: '0987',
        },
      },
    },
  })
  login(@Body() login: Login) {
    return this.authService.login(login);
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
  update(
    @Param('id') id: string,
    @Body() updateSignUpProviderDto: UpdateSignUpProviderDto,
  ) {
    return this.authService.update(id, updateSignUpProviderDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.authService.remove(id);
  }
  // ......................................................../////////////////..........................................................................

  @Post('/providerlogin')
  @ApiOperation({ summary: 'enter your details' })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        email: {
          type: 'string',
          example: 'osam@.com',
        },
        password: {
          type: 'string',
          example: '0987',
        },
      },
    },
  })
  providerlogin(@Body() login: Login) {
    return this.authService.providerlogin(login);
  }

  @Get()
  findAllp() {
    return this.authService.findAll();
  }

  @Get(':id')
  loginfindOne(@Param('id') id: string) {
    return this.authService.findOne(id);
  }

  @Patch(':id')
  updatep(
    @Param('id') id: string,
    @Body() updateSignUpProviderDto: UpdateSignUpProviderDto,
  ) {
    return this.authService.update(id, updateSignUpProviderDto);
  }

  @Delete(':id')
  removep(@Param('id') id: string) {
    return this.authService.remove(id);
  }
}
