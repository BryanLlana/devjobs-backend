import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from 'bcryptjs'
import { LoginUserDto } from './dto/login-user.dto';

@Injectable()
export class UserService {
  constructor (
    @InjectModel(User.name)
    private readonly userModel: Model<User>
  ) {}

  async create(createUserDto: CreateUserDto) {
    const user = await this.userModel.findOne({ email: createUserDto.email })
    if (user) throw new BadRequestException('Usuario ya registrado')

    try {
      const userCreated = await this.userModel.create({
        ...createUserDto,
        password: bcrypt.hashSync(createUserDto.password, 10)
      })
      return {
        message: 'Usuario registrado correctamente',
        user: userCreated
      }
    } catch (error) {
      console.log(error)
    }
  }

  async login (loginUserDto: LoginUserDto) {
    const user = await this.userModel.findOne({ email: loginUserDto.email })
    if (!user) throw new UnauthorizedException('Credenciales no válidas')
    if (!bcrypt.compareSync(loginUserDto.password, user.password)) {
      throw new UnauthorizedException('Password incorrecto')
    }

    return user
  }
}
