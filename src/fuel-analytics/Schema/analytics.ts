import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type AnalyticsDocument = Analytics & Document
@Schema()
export class Analytics {
    @Prop()
    vehicletype: string;
    @Prop()
    fueltype: string;
    @Prop()
    price: string;
    @Prop()
    expectations: string;
}

export const AnalyticsSchema = SchemaFactory.createForClass(Analytics)