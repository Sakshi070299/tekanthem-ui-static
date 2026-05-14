import { plainToInstance } from 'class-transformer'
import { IsString, IsNotEmpty, IsOptional, validateSync } from 'class-validator'

class EnvironmentVariables {
  @IsOptional()
  @IsString()
  NODE_ENV?: string

  @IsString()
  @IsNotEmpty()
  DB_HOST!: string

  @IsString()
  @IsNotEmpty()
  DB_NAME!: string

  @IsString()
  @IsNotEmpty()
  DB_USER!: string

  @IsString()
  @IsNotEmpty()
  DB_PASSWORD!: string

  @IsString()
  @IsNotEmpty()
  JWT_SECRET!: string

  @IsString()
  @IsNotEmpty()
  JWT_REFRESH_SECRET!: string
}

export function validateEnv(config: Record<string, unknown>) {
  const validated = plainToInstance(EnvironmentVariables, config, {
    enableImplicitConversion: true,
  })
  const errors = validateSync(validated, { skipMissingProperties: false })
  if (errors.length > 0) {
    throw new Error(
      `Environment validation failed:\n${errors.map((e) => Object.values(e.constraints ?? {}).join(', ')).join('\n')}`,
    )
  }
  return validated
}
