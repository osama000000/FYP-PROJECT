import { Module } from '@nestjs/common';
import { FuelAnalyticsService } from './fuel-analytics.service';
import { FuelAnalyticsController } from './fuel-analytics.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Analytics, AnalyticsSchema } from './Schema/analytics';

@Module({
  imports:[MongooseModule.forFeature([{name:Analytics.name, schema:AnalyticsSchema}])],
  controllers: [FuelAnalyticsController],
  providers: [FuelAnalyticsService],
})
export class FuelAnalyticsModule {}
