import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  PrimaryGeneratedColumn,
} from 'typeorm'

@Entity('newsletter_subscribers')
export class NewsletterSubscriber {
  @PrimaryGeneratedColumn('uuid')
  id!: string

  @Index({ unique: true })
  @Column({ length: 160 })
  email!: string

  @Column({ default: true })
  isActive!: boolean

  @Column({ length: 60, nullable: true })
  source?: string | null

  @CreateDateColumn()
  createdAt!: Date
}
