import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { User } from 'src/auth/Schema/user';

export type FuelbookDocument = Fuelbook & Document;
@Schema()
export class Fuelbook {
  @Prop()
  location: string;
  @Prop()
  fueltype: string;
  @Prop()
  litre: string;
  @Prop()
  paymentMethod: string;

  @Prop()
  price: string;

  @Prop()
  status: string;

  @Prop([{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }])
  userId: User;
}

export const FuelbookSchema = SchemaFactory.createForClass(Fuelbook);
