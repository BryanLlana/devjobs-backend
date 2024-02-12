import { IsOptional, IsArray, MinLength, IsString,  } from 'class-validator'

export class CreateVacantDto {
  @MinLength(1, {
    message: 'El título es obligatorio'
  })
  @IsString()
  public readonly title: string

  @MinLength(1, {
    message: 'La empresa es obligatoria'
  })
  @IsString()
  public readonly company: string

  @MinLength(1, {
    message: 'La ubicación es obligatoria'
  })
  @IsString()
  public readonly location: string

  @IsOptional()
  public readonly salary: string

  @MinLength(1, {
    message: 'El contrato es obligatorio'
  })
  @IsString()
  public readonly contract: string

  @MinLength(1, {
    message: 'La descripción es obligatoria'
  })
  @IsString()
  public readonly description: string

  @IsArray()
  public readonly skills: string[]
}
