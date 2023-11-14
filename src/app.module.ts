import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { MaintenanceModule } from './maintenance/maintenance.module';
import { ChatModule } from './chat/chat.module';
import { FuelBookingModule } from './fuel-booking/fuel-booking.module';
import { NearestPumpModule } from './nearest-pump/nearest-pump.module';
import { FuelAnalyticsModule } from './fuel-analytics/fuel-analytics.module';
import { CarwashModule } from './carwash/carwash.module';
import { AuthModule } from './auth/auth.module';
import { CarModule } from './car/car.module';
import { AppGateway } from './app.gateway';


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

    MaintenanceModule,
    ChatModule,
    FuelBookingModule,
    NearestPumpModule,
    FuelAnalyticsModule,
    CarwashModule,
    AuthModule,
    CarModule,
    
  ],
  controllers: [AppController],
  providers: [AppService, AppGateway],
})
export class AppModule {}
