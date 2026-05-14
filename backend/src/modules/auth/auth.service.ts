import {
  ConflictException,
  Injectable,
  Logger,
  UnauthorizedException,
} from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { JwtService } from '@nestjs/jwt'
import { InjectRepository } from '@nestjs/typeorm'
import * as bcrypt from 'bcrypt'
import { Repository } from 'typeorm'
import { User } from '../../entities/user.entity'
import { RegisterDto } from './dto/register.dto'
import { LoginDto } from './dto/login.dto'

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name)

  constructor(
    @InjectRepository(User)
    private readonly users: Repository<User>,
    private readonly jwt: JwtService,
    private readonly config: ConfigService,
  ) {}

  async register(dto: RegisterDto) {
    const existing = await this.users.findOne({
      where: { email: dto.email.toLowerCase() },
    })
    if (existing) {
      throw new ConflictException('An account with this email already exists')
    }

    const passwordHash = await bcrypt.hash(dto.password, 12)
    const user = await this.users.save(
      this.users.create({
        name: dto.name.trim(),
        email: dto.email.toLowerCase(),
        passwordHash,
        role: 'user',
      }),
    )
    this.logger.log('User registered', { userId: user.id, email: user.email })

    return this.issueTokens(user)
  }

  async login(dto: LoginDto) {
    const user = await this.users.findOne({
      where: { email: dto.email.toLowerCase() },
    })
    if (!user || !user.isActive) {
      throw new UnauthorizedException('Invalid credentials')
    }
    const ok = await bcrypt.compare(dto.password, user.passwordHash)
    if (!ok) throw new UnauthorizedException('Invalid credentials')

    this.logger.log('User logged in', { userId: user.id })
    return this.issueTokens(user)
  }

  async refresh(refreshToken: string) {
    try {
      const decoded = this.jwt.verify(refreshToken, {
        secret: this.config.get<string>('jwt.refreshSecret'),
      })
      const user = await this.users.findOne({ where: { id: decoded.sub } })
      if (!user || !user.isActive) {
        throw new UnauthorizedException('Invalid refresh token')
      }
      return this.issueTokens(user)
    } catch {
      throw new UnauthorizedException('Invalid or expired refresh token')
    }
  }

  private issueTokens(user: User) {
    const payload = { sub: user.id, email: user.email, role: user.role }
    const accessToken = this.jwt.sign(payload, {
      secret: this.config.get<string>('jwt.secret'),
      expiresIn: this.config.get<string>('jwt.expiresIn'),
    })
    const refreshToken = this.jwt.sign(payload, {
      secret: this.config.get<string>('jwt.refreshSecret'),
      expiresIn: this.config.get<string>('jwt.refreshExpiresIn'),
    })
    return {
      accessToken,
      refreshToken,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    }
  }
}
