import {
  IsEmail,
  IsEnum,
  IsIn,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator'
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'

export class CreateContactDto {
  @ApiProperty({ example: 'Priya Sharma', maxLength: 120 })
  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  @MaxLength(120)
  name!: string

  @ApiProperty({ example: 'priya@company.com' })
  @IsEmail()
  @MaxLength(160)
  email!: string

  @ApiPropertyOptional({ example: '+91 98765 43210' })
  @IsOptional()
  @IsString()
  @MaxLength(30)
  phone?: string

  @ApiProperty({ example: 'Acme Industries', maxLength: 160 })
  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  @MaxLength(160)
  company!: string

  @ApiPropertyOptional({
    enum: ['1-10', '11-50', '51-200', '201-1000', '1000+'],
  })
  @IsOptional()
  @IsIn(['1-10', '11-50', '51-200', '201-1000', '1000+'])
  employees?: string

  @ApiPropertyOptional({ enum: ['suite', 'finance', 'payroll', 'cnf', 'crm'] })
  @IsOptional()
  @IsIn(['suite', 'finance', 'payroll', 'cnf', 'crm'])
  product?: string

  @ApiProperty({ minLength: 10, maxLength: 2000 })
  @IsString()
  @MinLength(10)
  @MaxLength(2000)
  message!: string

  @ApiPropertyOptional({ enum: ['demo', 'sales', 'trial', 'general'] })
  @IsOptional()
  @IsEnum(['demo', 'sales', 'trial', 'general'])
  intent: 'demo' | 'sales' | 'trial' | 'general' = 'general'
}
