import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { AuthService } from './auth/auth.service';
import { MaintenanceModule } from './maintenance/maintenance.module';
import { ChatModule } from './chat/chat.module';
import { FuelBookingModule } from './fuel-booking/fuel-booking.module';
import { NearestPumpModule } from './nearest-pump/nearest-pump.module';
import { FuelAnalyticsModule } from './fuel-analytics/fuel-analytics.module';

import { CarModule } from './car/car.module';

import { CarwashModule } from './carwash/carwash.module';

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

    UserModule,
    AuthModule,
    MaintenanceModule,
    ChatModule,
    FuelBookingModule,
    NearestPumpModule,
    FuelAnalyticsModule,
  
    CarModule,
  

  
    CarwashModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
