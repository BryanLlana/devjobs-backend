import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateVacantDto } from './dto/create-vacant.dto';
import { UpdateVacantDto } from './dto/update-vacant.dto';
import { Model } from 'mongoose';
import { Vacant } from './entities/vacant.entity';
import { InjectModel } from '@nestjs/mongoose';
import { PaginationDto } from '../common/dtos/pagination.dto';

@Injectable()
export class VacantService {
  constructor(
    @InjectModel(Vacant.name)
    private readonly vacantModel: Model<Vacant>,
  ){}

  async create(createVacantDto: CreateVacantDto) {
    try {
      const vacant = await this.vacantModel.create(createVacantDto)      
      return {
        message: 'Vacante registrado correctamente',
        vacant
      }
    } catch (error) {
      console.log(error)
      throw new InternalServerErrorException('Internal Server Error')
    }
  }

  async findAll(paginationDto: PaginationDto) {
    const { limit = 10, offset = 0 } = paginationDto

    try {
      return await this.vacantModel.find().limit(limit).skip(offset).select('-__v')
    } catch (error) {
      console.log(error)
      throw new InternalServerErrorException('Internal Server Error')
    }
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
