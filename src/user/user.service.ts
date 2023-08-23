import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './Schema/User';
import { Model } from 'mongoose';

@Injectable()
export class UserService {
  constructor(@InjectModel (User.name)private userModel :Model<UserDocument> ){}
  create(createUserDto: CreateUserDto) :Promise<User> {
    const  model = new this.userModel();
    model.name=createUserDto.name;
    model.email=createUserDto.email;
    model.address=createUserDto.address;
    model.phnumber=createUserDto.phnumber;
    model.password=createUserDto.password;
    return model.save();
  }

  findAll() :Promise<User[]>{
    return this.userModel.find().exec();
  }

  findOne(id: string) {
    return this.userModel.findById(id).exec();
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return this.userModel.updateOne({_id:id},{
      name:updateUserDto.name,
      email:updateUserDto.email,
      address:updateUserDto.address,
      phnumber:updateUserDto.phnumber,
      password:updateUserDto.password
    });
  }

  remove(id: string) {
    return this.userModel.deleteOne({_id:id});
  }
}
