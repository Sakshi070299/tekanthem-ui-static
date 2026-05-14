import { IsEmail, IsOptional, IsString, MaxLength } from 'class-validator'
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'

export class SubscribeDto {
  @ApiProperty({ example: 'priya@company.com' })
  @IsEmail()
  @MaxLength(160)
  email!: string

  @ApiPropertyOptional({ example: 'footer' })
  @IsOptional()
  @IsString()
  @MaxLength(60)
  source?: string
}
