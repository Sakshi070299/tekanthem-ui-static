import {
  IsBoolean,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUrl,
  Matches,
  Max,
  MaxLength,
  Min,
  MinLength,
} from 'class-validator'
import { ApiProperty, ApiPropertyOptional, PartialType } from '@nestjs/swagger'

export class CreatePostDto {
  @ApiProperty({ example: 'gst-2026-changes' })
  @IsString()
  @MinLength(3)
  @MaxLength(200)
  @Matches(/^[a-z0-9-]+$/, {
    message: 'slug must be lowercase letters, numbers, and hyphens only',
  })
  slug!: string

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @MaxLength(240)
  title!: string

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @MinLength(40)
  @MaxLength(360)
  excerpt!: string

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  content!: string

  @ApiProperty({
    enum: ['Product', 'Compliance', 'Customer Stories', 'Engineering', 'Guides'],
  })
  @IsString()
  category!: string

  @ApiProperty()
  @IsString()
  @MaxLength(120)
  author!: string

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  @MaxLength(120)
  authorRole?: string

  @ApiPropertyOptional()
  @IsOptional()
  @IsUrl()
  coverImageUrl?: string

  @ApiPropertyOptional({ default: 5 })
  @IsOptional()
  @IsInt()
  @Min(1)
  @Max(60)
  readingMinutes?: number

  @ApiPropertyOptional({ enum: ['draft', 'published', 'archived'] })
  @IsOptional()
  @IsEnum(['draft', 'published', 'archived'])
  status?: 'draft' | 'published' | 'archived'

  @ApiPropertyOptional({ default: false })
  @IsOptional()
  @IsBoolean()
  featured?: boolean
}

export class UpdatePostDto extends PartialType(CreatePostDto) {}
