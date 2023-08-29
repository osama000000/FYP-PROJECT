import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Car } from './Schema/Cars';
import { Booking } from './Schema/booking.interface';


@Injectable()
export class CarService {
  constructor(@InjectModel(Car.name) private readonly carModel: Model<Car>,
  @InjectModel('Booking') private readonly bookingModel: Model<Booking>) {}


  async createCar(model: string, brand: string): Promise<Car> {
    const car = new this.carModel({ model, brand });
    return car.save();
  }

  async getAllCars(): Promise<Car[]> {
    return this.carModel.find().exec();
  }
  async findById(carId: string): Promise<Car> {
    const car = await this.carModel.findById(carId);
    if (!car) {
      throw new NotFoundException('Car not found');
    }
    return car;
  }
  async updateAvailability(carId: string, isAvailable: boolean): Promise<void> {
    const car = await this.findById(carId);
    car.isAvailable = isAvailable;
   
  }

  async bookCar(carId: string, startDate: Date, endDate: Date): Promise<Booking> {
    const car = await this.carModel.findById(carId);
    if (!car) {
      throw new NotFoundException('Car not found');
    }

    // Check if the car is available for the specified dates
    if (!car.isAvailable) {
      throw new Error('Car is not available for booking');
    }

    // Create a new booking
    const booking = new this.bookingModel({
      car: carId,
      startDate,
      endDate,
    });

    // Update car availability status
    car.isAvailable = false;
    await car.save();

    return booking.save();
  }

  async cancelBooking(bookingId: string): Promise<void> {
    const booking = await this.bookingModel.findById(bookingId);
    if (!booking) {
      throw new NotFoundException('Booking not found');
    }

    // Update car availability status
    const car = await this.carModel.findById(booking.car);
    if (car) {
      car.isAvailable = true;
      await car.save();
    }

    await this.bookingModel.deleteOne({ _id: bookingId }).exec();
  }
  async getBookingsByCarId(carId: string): Promise<Booking[]> {
    return this.bookingModel.find({ car: carId }).exec();
  }
  
  async getBookingsByTimePeriod(startDate: Date, endDate: Date): Promise<Booking[]> {
    return this.bookingModel.find({ startDate: { $gte: startDate }, endDate: { $lte: endDate } }).exec();
  }

  update(id: number, updateCarDto: UpdateCarDto) {
    return `This action updates a #${id} car`;
  }

  remove(id: number) {
    return `This action removes a #${id} car`;
  }
}
