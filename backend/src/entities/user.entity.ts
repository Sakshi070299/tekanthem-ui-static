import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  Index,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'

export type UserRole = 'admin' | 'editor' | 'user'

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id!: string

  @Column({ length: 120 })
  name!: string

  @Index({ unique: true })
  @Column({ length: 160 })
  email!: string

  @Column({ length: 200 })
  passwordHash!: string

  @Column({ type: 'enum', enum: ['admin', 'editor', 'user'], default: 'user' })
  role!: UserRole

  @Column({ default: true })
  isActive!: boolean

  @CreateDateColumn()
  createdAt!: Date

  @UpdateDateColumn()
  updatedAt!: Date

  @DeleteDateColumn({ nullable: true })
  deletedAt?: Date | null
}
