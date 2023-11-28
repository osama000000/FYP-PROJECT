import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Provider } from 'src/auth/Schema/Provider';
import { User } from 'src/auth/Schema/user';

export type CarDocument = Car & Document;
@Schema()
export class Car extends Document {
  @Prop()
  carImage: string;

  @Prop()
  name: string;

  @Prop()
  model: string;

  @Prop()
  condition: string;

  @Prop()
  price: string;

  @Prop()
  description: string;

  @Prop([{ type: mongoose.Schema.Types.ObjectId, ref: 'Provider' }])
  provider: Provider;

  @Prop()
  status: string;
}
export const CarSchema = SchemaFactory.createForClass(Car);
