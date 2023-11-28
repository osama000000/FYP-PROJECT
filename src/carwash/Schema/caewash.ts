import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { User } from 'src/auth/Schema/user';

export type CarwashDocument = Carwash & Document;
@Schema()
export class Carwash {
  @Prop()
  location: string;
  @Prop()
  cartype: string;
  @Prop()
  servicetype: string;
  @Prop()
  price: string;
  @Prop([{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }])
  userId: User;
  @Prop()
  status: string;
}
export const CarwashSchema = SchemaFactory.createForClass(Carwash);
