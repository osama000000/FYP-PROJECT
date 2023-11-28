import { User } from 'src/auth/Schema/user';

export class CreateFuelBookingDto {
  location: string;

  fueltype: string;

  litre: string;

  paymentMethod: string;

  price: string;

  status: string;

  userId: User;
}
