import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type CarDocument= Car&Document
@Schema()
export class Car {
 
  
    @Prop()
    model: string;
  
    @Prop()
    brand: string;
  
    @Prop()
    isAvailable: boolean;
  }

  export const CarSchema = SchemaFactory.createForClass(Car)