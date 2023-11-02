import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type PumpDocument = Pump&Document
@Schema()
export class Pump{

    @Prop()
    location:string;
    @Prop()
    name: string;


}

export const PumpSchema = SchemaFactory.createForClass(Pump)