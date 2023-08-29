import { SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

export const Bookings = new mongoose.Schema({
  car: { type: mongoose.Schema.Types.ObjectId, ref: 'Car' },
  startDate: Date,
  endDate: Date,
});
