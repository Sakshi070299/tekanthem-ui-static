import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common'
import { ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger'
import { Throttle } from '@nestjs/throttler'
import { NewsletterService } from './newsletter.service'
import { SubscribeDto } from './dto/subscribe.dto'
import { Public } from '../../common/decorators/public.decorator'

@ApiTags('newsletter')
@Controller('api/newsletter')
export class NewsletterController {
  constructor(private readonly newsletterService: NewsletterService) {}

  @Public()
  @Post('subscribe')
  @HttpCode(HttpStatus.CREATED)
  @Throttle({ default: { limit: 5, ttl: 60_000 } })
  @ApiOperation({ summary: 'Subscribe to the Tekanthem newsletter' })
  @ApiCreatedResponse({ description: 'Subscription accepted' })
  subscribe(@Body() dto: SubscribeDto) {
    return this.newsletterService.subscribe(dto)
  }
}
