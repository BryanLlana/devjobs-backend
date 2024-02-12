import { IsOptional, IsPositive, Min } from 'class-validator'

export class PaginationDto {
  @IsOptional() @IsPositive()
  public readonly limit?: number

  @IsOptional() @IsPositive()
  public readonly offset?: number
}