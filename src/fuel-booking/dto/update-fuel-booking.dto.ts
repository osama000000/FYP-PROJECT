import { PartialType } from '@nestjs/swagger';
import { CreateFuelBookingDto } from './create-fuel-booking.dto';

export class UpdateFuelBookingDto extends PartialType(CreateFuelBookingDto) {}
