import { Module } from '@nestjs/common';
import { VacantService } from './vacant.service';
import { VacantController } from './vacant.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Vacant, VacantSchema } from './entities/vacant.entity';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule,
    MongooseModule.forFeature([{
      name: Vacant.name,
      schema: VacantSchema
    }])
  ],
  controllers: [VacantController],
  providers: [VacantService],
})
export class VacantModule {}
