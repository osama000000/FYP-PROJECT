import { Injectable } from '@nestjs/common';
import { CreateNearestPumpDto } from './dto/create-nearest-pump.dto';
import { UpdateNearestPumpDto } from './dto/update-nearest-pump.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Pump, PumpDocument } from './Schema/pump';
import { Model } from 'mongoose';

@Injectable()
export class NearestPumpService {
  constructor(@InjectModel(Pump.name)private pumpModel : Model <PumpDocument>){}
  create(createNearestPumpDto: CreateNearestPumpDto) :Promise<Pump>{
    const model = new this.pumpModel();
    model.location=createNearestPumpDto.location;
    model.name=createNearestPumpDto.name;
    return model.save();
  }

  findAll()  :Promise<Pump[]>{
    return this.pumpModel.find().exec();
  }

  findOne(id: string)  :Promise<Pump>{
    return this.pumpModel.findById(id).exec();
  }

  update(id: string, updateNearestPumpDto: UpdateNearestPumpDto) {
    return this.pumpModel.updateOne({_id:id},{
      location:updateNearestPumpDto.location,
      name:updateNearestPumpDto.name,
    })
  }

  remove(id: string) {
    return this.pumpModel.deleteOne({_id:id})
  }
}
