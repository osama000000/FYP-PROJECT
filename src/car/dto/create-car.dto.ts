import { Prop } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Provider } from 'src/auth/Schema/Provider';
import { User } from 'src/auth/Schema/user';

export class CreateCarDto {
  carImage: string;

  name: string;

  model: string;

  condition: string;

  price: string;

  description: string;

  provider: Provider;

  status: string;
}
