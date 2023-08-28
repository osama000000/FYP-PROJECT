import { Injectable } from '@nestjs/common';
import { CreateFuelAnalyticDto } from './dto/create-fuel-analytic.dto';
import { UpdateFuelAnalyticDto } from './dto/update-fuel-analytic.dto';
import { Analytics, AnalyticsDocument } from './Schema/analytics';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class FuelAnalyticsService {
  constructor(@InjectModel(Analytics.name)private analyticsModel : Model <AnalyticsDocument>){}
  create(createFuelAnalyticDto: CreateFuelAnalyticDto) :Promise<Analytics>{
    const model = new this.analyticsModel();
    model.vehicletype=createFuelAnalyticDto.vehicletype;
    model.fueltype=createFuelAnalyticDto.fueltype;
    model.price=createFuelAnalyticDto.price;
    model.expectations=createFuelAnalyticDto.expectations;
    return model.save();
  }

  findAll() :Promise<Analytics[]>{
    return this.analyticsModel.find().exec();
  }

  findOne(id: string) :Promise<Analytics>{
    return this.analyticsModel.findById(id).exec();
  }

  update(id: string, updateFuelAnalyticDto: UpdateFuelAnalyticDto) {
    return this.analyticsModel.updateOne({_id:id},{
      vehicletype:updateFuelAnalyticDto.vehicletype,
      fueltype:updateFuelAnalyticDto.fueltype,
      price:updateFuelAnalyticDto.price,
      expectations:updateFuelAnalyticDto.expectations

    });
  }

  remove(id: string) {
    return this.analyticsModel.deleteOne({_id:id});
  }
}
