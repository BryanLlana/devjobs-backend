import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { VacantService } from './vacant.service';
import { CreateVacantDto } from './dto/create-vacant.dto';
import { UpdateVacantDto } from './dto/update-vacant.dto';
import { PaginationDto } from 'src/common/dtos/pagination.dto';
import { ParseMongoIdPipe } from 'src/common/pipes/parse-mongo-id/parse-mongo-id.pipe';

@Controller('vacant')
export class VacantController {
  constructor(
    private readonly vacantService: VacantService
  ) {}

  @Post()
  create(@Body() createVacantDto: CreateVacantDto) {
    return this.vacantService.create(createVacantDto);
  }

  @Get()
  findAll(@Query() paginationDto: PaginationDto) {
    return this.vacantService.findAll(paginationDto);
  }

  @Get(':id')
  findOne(@Param('id', ParseMongoIdPipe) id: string) {
    return this.vacantService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVacantDto: UpdateVacantDto) {
    return this.vacantService.update(+id, updateVacantDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.vacantService.remove(+id);
  }
}
