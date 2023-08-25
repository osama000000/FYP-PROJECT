import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export  type MaintenanceDocument = Maintenance& Document
@Schema()
export class Maintenance {
    
    @Prop()
    vehicletype: string;
    @Prop()
    servicetype: string;
    @Prop()
    nearestmechanic: string;
    @Prop()
    description: string;



}

export const MaintenanceSchema = SchemaFactory.createForClass(Maintenance)