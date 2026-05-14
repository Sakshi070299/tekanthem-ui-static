import { Test } from '@nestjs/testing'
import { getRepositoryToken } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { ContactService } from './contact.service'
import { ContactSubmission } from '../../entities/contact-submission.entity'

describe('ContactService', () => {
  let service: ContactService
  let repo: jest.Mocked<Repository<ContactSubmission>>

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        ContactService,
        {
          provide: getRepositoryToken(ContactSubmission),
          useValue: {
            create: jest.fn((x) => x),
            save: jest.fn(),
            findAndCount: jest.fn(),
            findOne: jest.fn(),
          },
        },
      ],
    }).compile()

    service = moduleRef.get(ContactService)
    repo = moduleRef.get(getRepositoryToken(ContactSubmission))
  })

  it('saves a normalized submission and returns id + message', async () => {
    const saved = { id: 'uuid-1', email: 'a@b.com' } as ContactSubmission
    repo.save.mockResolvedValue(saved)

    const result = await service.submit({
      name: '  Priya Sharma ',
      email: 'PRIYA@CO.com',
      company: 'Acme',
      message: 'Hi there, please get in touch',
      intent: 'demo',
    })

    expect(repo.save).toHaveBeenCalledTimes(1)
    const payload = (repo.create as jest.Mock).mock.calls[0][0]
    expect(payload.email).toBe('priya@co.com')
    expect(payload.name).toBe('Priya Sharma')
    expect(payload.status).toBe('new')
    expect(result.id).toBe('uuid-1')
  })

  it('throws NotFoundException when submission missing', async () => {
    repo.findOne.mockResolvedValue(null)
    await expect(service.findOneOrFail('missing-id')).rejects.toThrow(
      'Submission missing-id not found',
    )
  })
})
