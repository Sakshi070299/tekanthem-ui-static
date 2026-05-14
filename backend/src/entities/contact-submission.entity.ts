import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  PrimaryGeneratedColumn,
} from 'typeorm'

export type ContactIntent = 'demo' | 'sales' | 'trial' | 'general'
export type ContactStatus = 'new' | 'contacted' | 'qualified' | 'closed'

@Entity('contact_submissions')
export class ContactSubmission {
  @PrimaryGeneratedColumn('uuid')
  id!: string

  @Column({ length: 120 })
  name!: string

  @Index()
  @Column({ length: 160 })
  email!: string

  @Column({ length: 30, nullable: true })
  phone?: string | null

  @Column({ length: 160 })
  company!: string

  @Column({ length: 30, nullable: true })
  employees?: string | null

  @Column({ length: 30, nullable: true })
  product?: string | null

  @Column({ type: 'text' })
  message!: string

  @Index()
  @Column({
    type: 'enum',
    enum: ['demo', 'sales', 'trial', 'general'],
    default: 'general',
  })
  intent!: ContactIntent

  @Index()
  @Column({
    type: 'enum',
    enum: ['new', 'contacted', 'qualified', 'closed'],
    default: 'new',
  })
  status!: ContactStatus

  @Column({ length: 60, nullable: true })
  source?: string | null

  @Column({ type: 'inet', nullable: true })
  ipAddress?: string | null

  @Column({ length: 500, nullable: true })
  userAgent?: string | null

  @CreateDateColumn()
  createdAt!: Date
}
