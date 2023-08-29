import { Document } from 'mongoose';

export interface Booking extends Document {
  car: string; // ID of the booked car
  startDate: Date;
  endDate: Date;
}
