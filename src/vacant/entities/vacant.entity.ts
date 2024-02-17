import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose'
import { Document } from 'mongoose';

@Schema()
export class Vacant extends Document {
  @Prop({
    type: String,
    index: true,
    trim: true,
    required: [true, 'Title is required']
  })
  public title: string
  @Prop({
    type: String,
    trim: true
  })
  public company: string
  @Prop({
    type: String,
    trim: true,
    required: [true, 'Location is required']
  })
  public location: string
  @Prop({
    type: String,
    trim: true,
    required: [true, 'Salary is required']
  })
  public salary: string
  @Prop({
    type: String,
    trim: true
  })
  public contract: string
  @Prop({
    type: String,
    trim: true
  })
  public description: string
  @Prop({
    type: [String]
  })
  public skills: string[]
  @Prop({
    type: [{
      nombre: String,
      email: String,
      cv: String
    }]
  })
  public candidates: Object[]
}

export const VacantSchema = SchemaFactory.createForClass(Vacant)
