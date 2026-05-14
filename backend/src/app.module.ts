import { Module } from '@nestjs/common'
import { APP_GUARD } from '@nestjs/core'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler'
import configuration from './config/configuration'
import { validateEnv } from './config/env.validation'
import { SnakeCaseNamingStrategy } from './database/naming.strategy'
import { JwtAuthGuard } from './common/guards/jwt-auth.guard'

import { AuthModule } from './modules/auth/auth.module'
import { ContactModule } from './modules/contact/contact.module'
import { NewsletterModule } from './modules/newsletter/newsletter.module'
import { BlogModule } from './modules/blog/blog.module'
import { HealthModule } from './modules/health/health.module'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
      validate: validateEnv,
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        type: 'postgres',
        host: config.get<string>('database.host'),
        port: config.get<number>('database.port'),
        database: config.get<string>('database.name'),
        username: config.get<string>('database.user'),
        password: config.get<string>('database.password'),
        autoLoadEntities: true,
        synchronize: config.get<string>('nodeEnv') === 'development',
        namingStrategy: new SnakeCaseNamingStrategy(),
        logging: config.get<string>('nodeEnv') === 'development' ? ['error', 'warn'] : ['error'],
      }),
    }),
    ThrottlerModule.forRoot([
      { name: 'default', ttl: 60_000, limit: 60 },
    ]),
    AuthModule,
    ContactModule,
    NewsletterModule,
    BlogModule,
    HealthModule,
  ],
  providers: [
    { provide: APP_GUARD, useClass: JwtAuthGuard },
    { provide: APP_GUARD, useClass: ThrottlerGuard },
  ],
})
export class AppModule {}
