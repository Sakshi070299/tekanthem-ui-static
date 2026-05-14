import { Injectable, Logger, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { ContactSubmission } from '../../entities/contact-submission.entity'
import { CreateContactDto } from './dto/create-contact.dto'
import {
  buildPaginatedResponse,
  PaginationQueryDto,
} from '../../common/dto/pagination-query.dto'

interface SubmitContext {
  ip?: string
  userAgent?: string
  source?: string
}

@Injectable()
export class ContactService {
  private readonly logger = new Logger(ContactService.name)

  constructor(
    @InjectRepository(ContactSubmission)
    private readonly submissions: Repository<ContactSubmission>,
  ) {}

  async submit(dto: CreateContactDto, ctx: SubmitContext = {}) {
    const submission = await this.submissions.save(
      this.submissions.create({
        name: dto.name.trim(),
        email: dto.email.toLowerCase().trim(),
        phone: dto.phone?.trim() || null,
        company: dto.company.trim(),
        employees: dto.employees ?? null,
        product: dto.product ?? null,
        message: dto.message.trim(),
        intent: dto.intent,
        status: 'new',
        ipAddress: ctx.ip ?? null,
        userAgent: ctx.userAgent ?? null,
        source: ctx.source ?? 'website',
      }),
    )

    this.logger.log('Contact submission received', {
      submissionId: submission.id,
      intent: submission.intent,
      company: submission.company,
    })

    // TODO: enqueue email notification to inbox + auto-reply to submitter
    return {
      id: submission.id,
      message: 'Thank you — our team will be in touch within 1 business day.',
    }
  }

  async list(query: PaginationQueryDto) {
    const [rows, total] = await this.submissions.findAndCount({
      order: { createdAt: 'DESC' },
      skip: (query.page - 1) * query.limit,
      take: query.limit,
    })
    return buildPaginatedResponse(rows, total, query)
  }

  async findOneOrFail(id: string) {
    const submission = await this.submissions.findOne({ where: { id } })
    if (!submission) throw new NotFoundException(`Submission ${id} not found`)
    return submission
  }
}
