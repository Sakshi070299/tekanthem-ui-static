import { Injectable, Logger } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { NewsletterSubscriber } from '../../entities/newsletter-subscriber.entity'
import { SubscribeDto } from './dto/subscribe.dto'

@Injectable()
export class NewsletterService {
  private readonly logger = new Logger(NewsletterService.name)

  constructor(
    @InjectRepository(NewsletterSubscriber)
    private readonly subscribers: Repository<NewsletterSubscriber>,
  ) {}

  async subscribe(dto: SubscribeDto) {
    const email = dto.email.toLowerCase().trim()
    let subscriber = await this.subscribers.findOne({ where: { email } })

    if (subscriber) {
      if (!subscriber.isActive) {
        subscriber.isActive = true
        subscriber = await this.subscribers.save(subscriber)
        this.logger.log('Newsletter resubscribed', { email })
      }
      return { message: 'You are subscribed.', alreadySubscribed: true }
    }

    subscriber = await this.subscribers.save(
      this.subscribers.create({
        email,
        source: dto.source ?? null,
        isActive: true,
      }),
    )
    this.logger.log('Newsletter subscribed', {
      id: subscriber.id,
      email,
      source: dto.source,
    })
    return { message: 'Subscribed — welcome!', alreadySubscribed: false }
  }
}
