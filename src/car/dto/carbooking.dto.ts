import { IsEmpty } from 'class-validator';
import { Car } from '../Schema/car';
import { User } from 'src/auth/Schema/user';
import { Provider } from 'src/auth/Schema/Provider';

export class CarbookingDto {
  name: string;

  carmodel: string;

  city: string;

  date: string;

  status: string;

  car: Car;

  user: User;
}
