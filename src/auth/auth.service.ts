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
@Injectable()
export class AuthService {
  constructor(@InjectModel(User.name) private userModel : Model <UserDocument>,
  private jwtService :JwtService){}
  // create(SignUpProviderDto: SignUpProviderDto):Promise<User> {
  //   const model = new this.userModel();
  //   model.username=SignUpProviderDto.username;
  //   model.email=SignUpProviderDto.email;
  //   model.phone=SignUpProviderDto.phone;
  //   model.address=SignUpProviderDto.address;
  //   model.cnic=SignUpProviderDto.cnic;
  //   model.password=SignUpProviderDto.password;
  //   model.services=SignUpProviderDto.services;


  //   return model.save();
  // }


 async signupprovider(signUpProviderDto : SignUpProviderDto) :Promise<{token:string}>{
  const {profileImage,fullname, email, date,phoneNumber, address,cnic,password,services}=signUpProviderDto

  const hashedPassword = await bcrypt.hash(password,10)

  const user = await this.userModel.create({
    profileImage,
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

// ..................PROVIER....//////////////

async signupuser(signUpUserDto:SignUpUserDto):Promise<{token:string}>{
  const {profileImage,fullname, email,date, phoneNumber, address,cnic,password}=signUpUserDto;
  
  const imageFilename = 'user1.jpg';
  const hashedPassword = await bcrypt.hash(password, 10)

  const user = await this.userModel.create({
    profileImage,
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

  // createUser(SignUpUserDto: SignUpUserDto):Promise<User> {
  //   const model = new this.userModel();
  //   model.username=SignUpUserDto.username;
  //   model.email=SignUpUserDto.email;
  //   model.phone=SignUpUserDto.phone;
  //   model.address=SignUpUserDto.address;
  //   model.cnic=SignUpUserDto.cnic;
  //   model.password=SignUpUserDto.password;
 
  //   return model.save();


  // }


  
// .................LOGIN.......................


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





  // loginUser(login: Login):Promise<User> {
  //   const model = new this.userModel();
   
  //   model.email=login.email;
   
  //   model.password=login.password;

  //   return model.save();
  // }

  findAll() :Promise<User[]>{
    return this.userModel.find().exec();
  }

  findOne(id: string):Promise<User> {
    return this.userModel.findById(id).exec();
  }

  update(id: string, updateSignUpProviderDto: UpdateSignUpProviderDto) {
    return this.userModel.updateOne({_id:id},{
      image:updateSignUpProviderDto.profileImage,
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

  updateuser(id: string, updateSignUpUserDto: UpdateSignUpUserDto) {
    return this.userModel.updateOne({_id:id},{
      image:updateSignUpUserDto.profileImage,
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

 

//  async signupprovider(SignUpProviderDto){
//   const {username, email, phone, address,cnic,password,services}=SignUpProviderDto

//   const hashedPassword = await bcrypt.hash(password,10)

//   const user = await this.userModel.create({
//     username,
//     email,
//     phone,
//     address,
//     cnic,
//     password,
//     services
//   })

//   const token = this.jwtService.sign({id:user._id})

//   return{token}
//  }

  
}
