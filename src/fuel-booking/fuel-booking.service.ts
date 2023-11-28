import { Injectable } from '@nestjs/common';
import { CreateFuelBookingDto } from './dto/create-fuel-booking.dto';
import { UpdateFuelBookingDto } from './dto/update-fuel-booking.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Fuelbook, FuelbookDocument } from './Schema/Fuelbook';
import { Model } from 'mongoose';

@Injectable()
export class FuelBookingService {
  createOrder(fuelBookingData: Fuelbook) {
    throw new Error('Method not implemented.');
  }
  constructor(
    @InjectModel(Fuelbook.name) private FuelbookModel: Model<FuelbookDocument>,
  ) {}
  create(createFuelBookingDto: CreateFuelBookingDto): Promise<Fuelbook> {
    const model = new this.FuelbookModel();
    model.location = createFuelBookingDto.location;
    model.fueltype = createFuelBookingDto.fueltype;
    model.litre = createFuelBookingDto.litre;
    model.paymentMethod = createFuelBookingDto.paymentMethod;
    model.price = createFuelBookingDto.price;
    model.status = createFuelBookingDto.status;
    model.userId = createFuelBookingDto.userId;

    return model.save();
  }

  findAll(): Promise<Fuelbook[]> {
    return this.FuelbookModel.find().exec();
  }

  findOne(id: string): Promise<Fuelbook> {
    return this.FuelbookModel.findById(id).exec();
  }

  update(id: string, updateFuelBookingDto: UpdateFuelBookingDto) {
    return this.FuelbookModel.updateOne(
      { _id: id },
      {
        location: updateFuelBookingDto.location,
        fueltype: updateFuelBookingDto.fueltype,
        litre: updateFuelBookingDto.litre,
        paymentmethod: updateFuelBookingDto.paymentMethod,
        userId: updateFuelBookingDto.userId,
        price: updateFuelBookingDto.userId,
        status: updateFuelBookingDto.status,
      },
    );
  }

  remove(id: string) {
    return this.FuelbookModel.deleteOne({ _id: id });
  }
}
