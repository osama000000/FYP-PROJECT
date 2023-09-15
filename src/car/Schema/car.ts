import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document,  } from "mongoose";

export type CarDocument = Car&Document;
@Schema()
export class Car extends Document{

    @Prop()
    name: string;

    @Prop()
    model: string;
    
}
export const CarSchema = SchemaFactory.createForClass(Car);