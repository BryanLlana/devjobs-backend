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
  public readonly title: string
  @Prop({
    type: String,
    trim: true
  })
  public readonly company: string
  @Prop({
    type: String,
    trim: true,
    required: [true, 'Location is required']
  })
  public readonly location: string
  @Prop({
    type: String,
    trim: true,
    required: [true, 'Salary is required']
  })
  public readonly salary: number
  @Prop({
    type: String,
    trim: true
  })
  public readonly contract: string
  @Prop({
    type: String,
    trim: true
  })
  public readonly description: string
  @Prop({
    type: [String]
  })
  public readonly skills: string[]
  @Prop({
    type: [{
      nombre: String,
      email: String,
      cv: String
    }]
  })
  public readonly candidates: Object[]
}

export const VacantSchema = SchemaFactory.createForClass(Vacant)
