// order.service.ts
import { Injectable } from '@nestjs/common';
import mongoose, { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Orders } from './Schema/order';


@Injectable()
export class OrderService {
  constructor(@InjectModel(Orders.name) private readonly orderModel: Model<Orders>) {}

  async createOrder(orderData: Partial<Orders>): Promise<Orders> {
    const createdOrder = new this.orderModel(orderData);
    return createdOrder.save();
  }
  
  findAll(): Promise<Orders[]> {
    return this.orderModel.find().exec();
  }
  async getOrderDetails(orderId: string): Promise<Orders> {
    return this.orderModel.findOne({ orderId }).exec();
  }

  // Other order-related methods
}
