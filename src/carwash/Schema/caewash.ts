import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type CarwashDocument = Carwash&Document
@Schema()
export class Carwash{
@Prop()
location:string;
@Prop()
cartype:string;
@Prop()
servicetype:string;
}
export const CarwashSchema = SchemaFactory.createForClass(Carwash)