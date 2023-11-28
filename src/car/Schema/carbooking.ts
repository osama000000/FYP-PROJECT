import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Car } from './car';
import { User } from 'src/auth/Schema/user';

export type CarbookingDocument = Carbooking & Document;
@Schema()
export class Carbooking {
  @Prop()
  name: string;
  @Prop()
  carmodel: string;
  @Prop()
  city: string;
  @Prop()
  date: string;
  @Prop()
  status: string;
  @Prop([{ type: mongoose.Schema.Types.ObjectId, ref: 'Car' }])
  car: Car;
  @Prop([{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }])
  user: User;
}
export const CarbookingSchema = SchemaFactory.createForClass(Carbooking);
