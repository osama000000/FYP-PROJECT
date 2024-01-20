// order.controller.ts
import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { Orders } from './Schema/order';
import { OrderService } from './orders.service';
import { ApiBody, ApiOperation } from '@nestjs/swagger';


@Controller('orders')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        location: {
          type: 'string',
          example: 'xyz',
        },
        date: {
          type: 'string',
          example: 'osam@.com',
        },
     
        userId: {
          type: 'string',
          example: 'asdfghj',
        },
        status: {
          type: 'string',
          example: 'asdfghj',
        },
        providerId: {
          type: 'string',
          example: 'asdfghj',
        },
        serviceType: {
          type: 'string',
          example: 'asdfghj',
        },
      },
    },
  })
  async createOrder(@Body() orderData: any) {
    return this.orderService.createOrder(orderData);
  }
  @Get()
  @ApiOperation({ summary: 'get all  your details' })
  findAll() {
    return this.orderService.findAll();
  }
  @Get(':orderId')
  async getOrderDetails(@Param('orderId') orderId: string) {
    return this.orderService.getOrderDetails(orderId);
  }
}
  // Other order-related endpoints

