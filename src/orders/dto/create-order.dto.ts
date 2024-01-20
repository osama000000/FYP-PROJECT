import { Prop } from "@nestjs/mongoose";
import mongoose from "mongoose";

export class CreateOrderDto {
   
   
    userlocation:string;

  
    providerlocation:string;


    date: Date;
  
    serviceType: string; // e.g., 'carBooking', 'fuelBooking'
  
    
    status:string;
  
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true })
  userId: mongoose.Types.ObjectId;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Provider', required: true })
  providerId: mongoose.Types.ObjectId;

}
