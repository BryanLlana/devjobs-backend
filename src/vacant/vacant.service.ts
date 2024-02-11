import { Injectable } from '@nestjs/common';
import { CreateVacantDto } from './dto/create-vacant.dto';
import { UpdateVacantDto } from './dto/update-vacant.dto';
import { Model } from 'mongoose';
import { Vacant } from './entities/vacant.entity';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class VacantService {
  constructor(
    @InjectModel(Vacant.name)
    private readonly catModel: Model<Vacant>,
  ){}

  create(createVacantDto: CreateVacantDto) {
    return 'This action adds a new vacant';
  }

  findAll() {
    return `This action returns all vacant`;
  }

  findOne(id: number) {
    return `This action returns a #${id} vacant`;
  }

  update(id: number, updateVacantDto: UpdateVacantDto) {
    return `This action updates a #${id} vacant`;
  }

  remove(id: number) {
    return `This action removes a #${id} vacant`;
  }
}
