import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { Document,  } from "mongoose";
import { Car } from "./car";

export type CarbookingDocument = Carbooking&Document;
@Schema()
export class Carbooking{

    @Prop()

    name:string;
    @Prop()
    carmodel:string;
    @Prop()
    city:string;
    @Prop()
    date:string;

    @Prop([{type: mongoose.Schema.Types.ObjectId, ref: 'Car'}])
    car:Car;

}
export const CarbookingSchema = SchemaFactory.createForClass(Carbooking);