import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document,  } from "mongoose";

export type CarDocument = Car&Document;
@Schema()
export class Car extends Document{


    @Prop()
    carImage: string;

    @Prop()
    name: string;

    @Prop()
    model: string;

    @Prop()
    condition:string;

    @Prop()
    price:string;

    @Prop()
    description:string;
    
}
export const CarSchema = SchemaFactory.createForClass(Car);