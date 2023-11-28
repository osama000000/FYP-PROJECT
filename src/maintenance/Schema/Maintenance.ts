import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type MaintenanceDocument = Maintenance & Document;
@Schema()
export class Maintenance {
  @Prop()
  vehicletype: string;
  @Prop()
  servicetype: string;
  @Prop()
  location: string;
  @Prop()
  description: string;

  @Prop()
  status: string;
}

export const MaintenanceSchema = SchemaFactory.createForClass(Maintenance);
