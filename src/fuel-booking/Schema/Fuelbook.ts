import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";


export type FuelbookDocument = Fuelbook & Document
@Schema()
export class Fuelbook{
    @Prop()
    location: string;
    @Prop()
    fueltype:string;
    @Prop()
    litre: string;
    @Prop()
    paymentMethod: string;
    
}

export const FuelbookSchema = SchemaFactory.createForClass(Fuelbook)