import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import mongoose from 'mongoose';

@Injectable()
export class ParseMongoIdPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    if (!mongoose.isValidObjectId(value)) {
      throw new BadRequestException('Id no válido')
    }
    return value;
  }
}
