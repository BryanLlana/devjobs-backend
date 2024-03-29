import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
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

  async findOne(id: string) {
    const vacant = await this.vacantModel.findById(id).select('-__v')
    if (!vacant) throw new NotFoundException('Vacante inexistente')
    return vacant
  }

  async update(id: string, updateVacantDto: UpdateVacantDto) {
    const vacant = await this.findOne(id)
    vacant.title = updateVacantDto.title
    vacant.company = updateVacantDto.company
    vacant.location = updateVacantDto.location
    vacant.salary = updateVacantDto.salary
    vacant.contract = updateVacantDto.contract
    vacant.description = updateVacantDto.description
    vacant.skills = updateVacantDto.skills
    
    try {
      await vacant.save()
      return {
        message: 'Vacante modificada correctamente',
        vacant
      }
    } catch (error) {
      console.log(error)
      throw new InternalServerErrorException('Internal Server Error')
    }
  }

  remove(id: number) {
    return `This action removes a #${id} vacant`;
  }
}
