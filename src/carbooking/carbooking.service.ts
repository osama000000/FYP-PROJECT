import { Injectable } from '@nestjs/common';
import { CreateCarbookingDto } from './dto/create-carbooking.dto';
import { UpdateCarbookingDto } from './dto/update-carbooking.dto';

@Injectable()
export class CarbookingService {
  create(createCarbookingDto: CreateCarbookingDto) {
    return 'This action adds a new carbooking';
  }

  findAll() {
    return `This action returns all carbooking`;
  }

  findOne(id: number) {
    return `This action returns a #${id} carbooking`;
  }

  update(id: number, updateCarbookingDto: UpdateCarbookingDto) {
    return `This action updates a #${id} carbooking`;
  }

  remove(id: number) {
    return `This action removes a #${id} carbooking`;
  }
}
