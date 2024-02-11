import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VacantService } from './vacant.service';
import { CreateVacantDto } from './dto/create-vacant.dto';
import { UpdateVacantDto } from './dto/update-vacant.dto';

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
  findAll() {
    return this.vacantService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.vacantService.findOne(+id);
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
