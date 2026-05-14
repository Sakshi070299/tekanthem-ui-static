import { IsEmail, IsNotEmpty, IsString } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'

export class LoginDto {
  @ApiProperty({ example: 'priya@company.com' })
  @IsEmail()
  email!: string

  @ApiProperty({ example: 'StrongPass!23' })
  @IsString()
  @IsNotEmpty()
  password!: string
}
