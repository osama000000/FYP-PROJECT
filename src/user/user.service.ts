import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './Schema/User';
import { Model } from 'mongoose';
import { CONSTANTS } from 'constant';


@Injectable()
export class UserService {
  public users: User[]=[
    {
      username:'User1',
      email:'osama2@gmail.com',
      address: 'i8//2 s36',
      phnumber:'+92 3418943122',
      password:'malik7890',
      role: CONSTANTS.ROLES.ADMIN
    },
    {
username:'User2',
      email:'osama2@gmail.com',
      address: 'i8//2 st36',
      phnumber:'+92 3418943122',
      password:'malik7890',
      role: CONSTANTS.ROLES.SERVICE_PROVIDER
    },

    {
      username:'User3',
      email:'osama2@gmail.com',
      address: 'i8//2',
      phnumber:'+92 3418943122',
      password:'malik7890',
      role: CONSTANTS.ROLES.SERVICE_USER
    },
  ]
  getUsersByName(userName:string) :User{
    return this.users.find((user:User)=> user.username==userName);
  }
  constructor(@InjectModel (User.name)private userModel : Model <UserDocument> ){}
  create(createUserDto: CreateUserDto) :Promise<User> {
    const  model = new this.userModel();
    model.username=createUserDto.username;
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
      username:updateUserDto.username,
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
