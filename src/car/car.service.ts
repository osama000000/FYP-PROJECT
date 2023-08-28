import { Injectable } from '@nestjs/common';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Car } from './Schema/Cars';


@Injectable()
export class CarService {
  constructor(@InjectModel('Car') private readonly carModel: Model<Car>) {}


  async createCar(model: string, brand: string): Promise<Car> {
    const car = new this.carModel({ model, brand });
    return car.save();
  }

  async getAllCars(): Promise<Car[]> {
    return this.carModel.find().exec();
  }
  create(createCarDto: CreateCarDto) {
    return Car;
  }

  findAll() {
    return `This action returns all car`;
  }

  findOne(id: string) {
    return this.carModel.findById(id).exec();
  }

  update(id: number, updateCarDto: UpdateCarDto) {
    return `This action updates a #${id} car`;
  }

  remove(id: number) {
    return `This action removes a #${id} car`;
  }
}
