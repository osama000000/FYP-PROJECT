import { Injectable, UnauthorizedException } from '@nestjs/common';

import { UpdateSignUpProviderDto } from './dto/update-auth.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './Schema/user';
import { Model } from 'mongoose';
import { SignUpProviderDto } from './dto/signupProviderDto';
import { SignUpUserDto } from './dto/signUpUserDto';
import { UpdateSignUpUserDto } from './dto/updateuserdto';
import { Login } from './dto/logindto';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { Provider, ProviderDocument } from './Schema/Provider';
@Injectable()
export class AuthService {
  constructor(@InjectModel(User.name) private userModel : Model <UserDocument>,
             @InjectModel(Provider.name) private providerModel: Model<ProviderDocument>,
  private jwtService :JwtService){}





// ..................USER....//////////////

async signupuser(signUpUserDto:SignUpUserDto):Promise<{token:string}>{
  const {ProfileImage,fullname, email,date, phoneNumber, address,cnic,password}=signUpUserDto;
  
  const imageFilename = 'user1.jpg';
  const hashedPassword = await bcrypt.hash(password, 10)

  const user = await this.userModel.create({
    ProfileImage,
    fullname,
    email,
    date,
    cnic,
    phoneNumber,
    address,
    password: hashedPassword,
   
    
  })

  const token = this.jwtService.sign({id:user._id})

  return{token}
 }




 findAll() :Promise<User[]>{
  return this.userModel.find().exec();
}

findOne(id: string):Promise<User> {
  return this.userModel.findById(id).exec();
}



updateuser(id: string, updateSignUpUserDto: UpdateSignUpUserDto) {
  return this.userModel.updateOne({_id:id},{
    image:updateSignUpUserDto.ProfileImage,
    fullname:updateSignUpUserDto.fullname,
    dob:updateSignUpUserDto.date,
    email:updateSignUpUserDto.email,
    phone:updateSignUpUserDto.phoneNumber,
    address:updateSignUpUserDto.address,
    cnic:updateSignUpUserDto.cnic,
    password:updateSignUpUserDto.password,
  
  });
}

remove(id: string) {
  return this.userModel.deleteOne({_id:id});
}

  
// .................LOGIN USER.......................


async login (loginDto:Login) : Promise <{token:string, user:object}>{
  const {email, password} = loginDto;

  const user = await this.userModel.findOne({email})

  if(!user){
    throw new UnauthorizedException('Invalid email or Password')
  }

  const isPasswordMatched = await bcrypt.compare(password, user.password)

  if(!isPasswordMatched){
    throw new UnauthorizedException('Invalid email or password')
  }

  const token = this.jwtService.sign({id: user._id});
  return {token,user};
}




 
//.............................Provider ..///////////////////////


async signupprovider(signUpProviderDto : SignUpProviderDto) :Promise<{token:string}>{
  const {ProfileImage,fullname, email, date,phoneNumber, address,cnic,password,services}=signUpProviderDto

  const hashedPassword = await bcrypt.hash(password,10)

  const user = await this.providerModel.create({
    ProfileImage,
    fullname,
    email,
    date,
    cnic,
    phoneNumber,
    address,
    password:hashedPassword,
    services
  })

  const token = this.jwtService.sign({id:user._id})

  return{token}
 }



findAllProvider() :Promise<Provider[]>{
  return this.providerModel.find().exec();
}

findOneProvider(id: string):Promise<Provider> {
  return this.providerModel.findById(id).exec();
}

update(id: string, updateSignUpProviderDto: UpdateSignUpProviderDto) {
  return this.providerModel.updateOne({_id:id},{
    image:updateSignUpProviderDto.ProfileImage,
    username:updateSignUpProviderDto.fullname,
    email:updateSignUpProviderDto.email,
    dob:updateSignUpProviderDto.date,
    phone:updateSignUpProviderDto.phoneNumber,
    address:updateSignUpProviderDto.address,
    cnic:updateSignUpProviderDto.cnic,
    password:updateSignUpProviderDto.password,
    services:updateSignUpProviderDto.services,
  });
}

removeProvider(id: string) {
  return this.providerModel.deleteOne({_id:id});
}

//........................LOGIN PROVIDER/.......................////

async loginProvider (loginDto:Login) : Promise <{token:string, user:object}>{
  const {email, password} = loginDto;

  const user = await this.providerModel.findOne({email})

  if(!user){
    throw new UnauthorizedException('Invalid email or Password')
  }

  const isPasswordMatched = await bcrypt.compare(password, user.password)

  if(!isPasswordMatched){
    throw new UnauthorizedException('Invalid email or password')
  }

  const token = this.jwtService.sign({id: user._id});
  return {token,user};
}

}
