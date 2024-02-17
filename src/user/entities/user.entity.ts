import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class User extends Document {
  @Prop({
    type: String,
    trim: true,
    index: true,
    required: [true, 'Name is required']
  })
  public name: string

  @Prop({
    type: String,
    trim: true,
    unique: true,
    lowercase: true,
    index: true,
    required: [true, 'Email is required']
  })
  public email: string

  @Prop({
    type: String,
    trim: true,
    required: [true, 'Password is required']
  })
  public password: string
}

export const UserSchema = SchemaFactory.createForClass(User) 
