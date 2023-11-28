import { Prop } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { User } from 'src/auth/Schema/user';

export class CreateCarwashDto {
  location: string;

  cartype: string;

  servicetype: string;

  price: string;

  @Prop([{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }])
  userId: User;

  status: string;
}
