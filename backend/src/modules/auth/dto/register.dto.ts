import { IsEmail, IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'

export class RegisterDto {
  @ApiProperty({ example: 'Priya Sharma' })
  @IsString()
  @IsNotEmpty()
  @MaxLength(120)
  name!: string

  @ApiProperty({ example: 'priya@company.com' })
  @IsEmail()
  @MaxLength(160)
  email!: string

  @ApiProperty({ example: 'StrongPass!23', minLength: 8 })
  @IsString()
  @MinLength(8)
  @MaxLength(80)
  password!: string
}
