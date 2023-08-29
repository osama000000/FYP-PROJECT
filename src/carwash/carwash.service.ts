import { Injectable } from '@nestjs/common';
import { CreateCarwashDto } from './dto/create-carwash.dto';
import { UpdateCarwashDto } from './dto/update-carwash.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Carwash, CarwashDocument } from './Schema/caewash';
import { Model } from 'mongoose';

@Injectable()
export class CarwashService {

  constructor(@InjectModel(Carwash.name)private carwashModel : Model <CarwashDocument>){}
  create(createCarwashDto: CreateCarwashDto):Promise<Carwash>{
    const model = new this.carwashModel();
    model.location=createCarwashDto.location;
    model.cartype=createCarwashDto.cartype;
    model.servicetype=createCarwashDto.servicetype;
    return model.save();
  }

  findAll() :Promise<Carwash[]>{
    return this.carwashModel.find().exec();
  }

  findOne(id: string) :Promise<Carwash>{
    return this.carwashModel.findById(id).exec();
  }

  update(id: string, updateCarwashDto: UpdateCarwashDto) {
    return this.carwashModel.updateOne({_id:id},{
      location:updateCarwashDto.location,
      cartype:updateCarwashDto.cartype,
      servicetype:updateCarwashDto.servicetype
    });
  }

  remove(id: string) {
    return this.carwashModel.deleteOne({_id:id});
  }
}
