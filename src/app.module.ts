import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { UserModule } from './user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal:true,
      envFilePath:[".local.env"]
    }),
    MongooseModule.forRootAsync({
      imports:[ConfigModule],
      useFactory:(configService: ConfigService)=> ({uri: configService.get("MONGO_URI") }),
      inject:[ConfigService]
    }),

    UserModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
