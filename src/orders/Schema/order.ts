// unified-order.model.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

@Schema()
export class Orders {
     
    @Prop()
    userlocation:string;

    @Prop()
    providerlocation:string;

    @Prop({ type: Date, default: Date.now })
    date: Date;
  
    @Prop({ required: true })
    serviceType: string; // e.g., 'carBooking', 'fuelBooking'
  
    @Prop()
    status:string;
  
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true })
  userId: mongoose.Types.ObjectId;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Provider', required: true })
  providerId: mongoose.Types.ObjectId;

 
  // Add other relevant fields
}

export const OrdersSchema = SchemaFactory.createForClass(Orders);
