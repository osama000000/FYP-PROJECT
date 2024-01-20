// order.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Orders, OrdersSchema } from './Schema/order';
import { OrderService } from './orders.service';
import { OrderController } from './orders.controller';

@Module({
  imports: [MongooseModule.forFeature([{ name: Orders.name, schema: OrdersSchema }])],
  controllers: [OrderController],
  providers: [OrderService],
})
export class OrdersModule {}
