import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config'
import { EnvConfiguration } from './config/env.config';
import { MongooseModule } from '@nestjs/mongoose';
import { VacantModule } from './vacant/vacant.module';
import { CommonModule } from './common/common.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [EnvConfiguration]
    }),
    MongooseModule.forRoot(process.env.MONGO_URL, {
      dbName: process.env.MONGO_DB_NAME
    }),
    VacantModule,
    CommonModule
  ],
  controllers: [],
  providers: [],
  exports: []
})
export class AppModule {}
