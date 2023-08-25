import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PassportModule } from '@nestjs/passport';
import { User } from 'src/user/Schema/User';
import { UserModule } from 'src/user/user.module';
import { LocalStrategy } from './local.strategy';
import { UserService } from 'src/user/user.service';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports:[PassportModule,UserModule,JwtModule.register({

     secret:"Key",
     signOptions:{
      expiresIn:"60s"
     }

  })],
  controllers: [],
  providers: [LocalStrategy,JwtStrategy, AuthService],
  exports:[AuthService]
})
export class AuthModule {}