import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { Pump } from "src/nearest-pump/Schema/pump";

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
    
    @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Pump' }] })
    pump :Pump;
}

export const FuelbookSchema = SchemaFactory.createForClass(Fuelbook)