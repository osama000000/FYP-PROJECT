import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './Schema/user';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { JwtStrategy } from './jwt.strategy';
import { Provider, ProviderSchema } from './Schema/Provider';
// import { PassportLocalStrategy } from './passport.local.strategy';

@Module({
  imports:[MongooseModule.forFeature([{name: User.name, schema: UserSchema,}]),
  MongooseModule.forFeature([{ name: Provider.name, schema: ProviderSchema }]),
PassportModule.register({defaultStrategy:'jwt'}),
JwtModule.registerAsync({
  inject:[ConfigService],
  useFactory:(config: ConfigService) =>{
    return{
      secret: config.get<string> ('JWT_SECRET'),
      signOptions:{
        expiresIn:config.get <string | number> ('JWT_EXPIRES'),
      },
    };
  },
})],

  controllers: [AuthController],
  providers: [AuthService,JwtStrategy],
  exports:[JwtStrategy,PassportModule],
    // PassportLocalStrategy],
})
export class AuthModule {}
