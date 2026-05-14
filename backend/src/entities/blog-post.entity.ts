import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  Index,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'

export type BlogPostStatus = 'draft' | 'published' | 'archived'

@Entity('blog_posts')
@Index(['status', 'publishedAt'])
export class BlogPost {
  @PrimaryGeneratedColumn('uuid')
  id!: string

  @Index({ unique: true })
  @Column({ length: 200 })
  slug!: string

  @Column({ length: 240 })
  title!: string

  @Column({ length: 360 })
  excerpt!: string

  @Column({ type: 'text' })
  content!: string

  @Column({ length: 80 })
  category!: string

  @Column({ length: 120 })
  author!: string

  @Column({ length: 120, nullable: true })
  authorRole?: string | null

  @Column({ length: 200, nullable: true })
  coverImageUrl?: string | null

  @Column({ default: 5 })
  readingMinutes!: number

  @Index()
  @Column({
    type: 'enum',
    enum: ['draft', 'published', 'archived'],
    default: 'draft',
  })
  status!: BlogPostStatus

  @Column({ default: false })
  featured!: boolean

  @Column({ type: 'timestamptz', nullable: true })
  publishedAt?: Date | null

  @CreateDateColumn()
  createdAt!: Date

  @UpdateDateColumn()
  updatedAt!: Date

  @DeleteDateColumn({ nullable: true })
  deletedAt?: Date | null
}
