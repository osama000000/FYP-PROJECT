import { Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { constrainedMemory } from 'process';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/user/Schema/User';

@Injectable()

export class AuthService {
  constructor(private readonly jwtService :JwtService){
  
  }

  //id card
  generateToken(payload: User) :string{
    return this.jwtService.sign(payload);
  }
  create(createAuthDto: CreateAuthDto) {
    return 'This action adds a new auth';
  }

  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}