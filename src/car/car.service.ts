import { Injectable } from '@nestjs/common';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Car, CarDocument } from './Schema/car';
import { Model } from 'mongoose';
import { Carbooking, CarbookingDocument } from './Schema/carbooking';
import { CarbookingDto } from './dto/carbooking.dto';
import { UpdatebookingDto } from './dto/updatebooking.dto';
import { User } from 'src/auth/Schema/user';

@Injectable()
export class CarService {
  constructor(@InjectModel(Car.name)private carModel: Model <CarDocument>,
       @InjectModel(Carbooking.name)private carbookingModel :Model <CarbookingDocument>){}



   createbooking(carbookingDto:CarbookingDto)  :Promise <Carbooking> {

    const model = new this.carbookingModel();
    model.name=carbookingDto.name;
    model.carmodel=carbookingDto.carmodel;
    model.city=carbookingDto.city;
    model.date=carbookingDto.date;
    model.car=carbookingDto.car;
    return model.save()
   }

 findAllbooking():Promise<Carbooking[]> {
    return this.carbookingModel.find().exec();
  }

  findOnebooking(id: string):Promise<Carbooking> {
    return this.carbookingModel.findById(id).exec();
  }

  updatebooking(id: string, updatebookingDto: UpdatebookingDto) {
    return this.carbookingModel.updateOne({_id:id},{
    name:updatebookingDto.name,
    carmodel:updatebookingDto.carmodel,
    city:updatebookingDto.city,
    date:updatebookingDto.date,
    carId:updatebookingDto.car,
    });
  }

  removebooking(id: string) {
    return this.carbookingModel.deleteOne({_id:id});
  }

  // .............car booking ends here......................

  create(createCarDto: CreateCarDto) :Promise<Car> {
    const model = new this.carModel();
    model.name=createCarDto.name;
    model.model=createCarDto.model;
    return model.save();
  }

  findAll():Promise<Car[]> {
    return this.carModel.find().exec();
  }

  findOne(id: string):Promise<Car> {
    return this.carModel.findById(id).exec();
  }

  update(id: string, updateCarDto: UpdateCarDto) {
    return this.carModel.updateOne({_id:id},{
    name:updateCarDto.name,
    model:updateCarDto.model,
    });
  }

  remove(id: string) {
    return this.carModel.deleteOne({_id:id});
  }
}