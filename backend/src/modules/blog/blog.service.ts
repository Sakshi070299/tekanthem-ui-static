import {
  ConflictException,
  Injectable,
  Logger,
  NotFoundException,
} from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { IsNull, Repository } from 'typeorm'
import { BlogPost } from '../../entities/blog-post.entity'
import { CreatePostDto, UpdatePostDto } from './dto/create-post.dto'
import {
  buildPaginatedResponse,
  PaginationQueryDto,
} from '../../common/dto/pagination-query.dto'

@Injectable()
export class BlogService {
  private readonly logger = new Logger(BlogService.name)

  constructor(
    @InjectRepository(BlogPost)
    private readonly posts: Repository<BlogPost>,
  ) {}

  async listPublished(query: PaginationQueryDto, category?: string) {
    const qb = this.posts
      .createQueryBuilder('post')
      .where('post.status = :status', { status: 'published' })
      .andWhere('post.deletedAt IS NULL')
      .orderBy('post.publishedAt', 'DESC')
      .skip((query.page - 1) * query.limit)
      .take(query.limit)

    if (category && category !== 'All') {
      qb.andWhere('post.category = :category', { category })
    }

    const [rows, total] = await qb.getManyAndCount()
    return buildPaginatedResponse(rows, total, query)
  }

  async findBySlug(slug: string): Promise<BlogPost> {
    const post = await this.posts.findOne({
      where: { slug, status: 'published', deletedAt: IsNull() },
    })
    if (!post) throw new NotFoundException(`Post '${slug}' not found`)
    return post
  }

  async create(dto: CreatePostDto): Promise<BlogPost> {
    const existing = await this.posts.findOne({ where: { slug: dto.slug } })
    if (existing) {
      throw new ConflictException(`A post with slug '${dto.slug}' already exists`)
    }
    const post = await this.posts.save(
      this.posts.create({
        ...dto,
        status: dto.status ?? 'draft',
        readingMinutes: dto.readingMinutes ?? 5,
        featured: dto.featured ?? false,
        publishedAt: dto.status === 'published' ? new Date() : null,
      }),
    )
    this.logger.log('Blog post created', { postId: post.id, slug: post.slug })
    return post
  }

  async update(id: string, dto: UpdatePostDto): Promise<BlogPost> {
    const post = await this.posts.findOne({ where: { id } })
    if (!post) throw new NotFoundException(`Post ${id} not found`)

    const wasPublished = post.status === 'published'
    Object.assign(post, dto)
    if (!wasPublished && dto.status === 'published' && !post.publishedAt) {
      post.publishedAt = new Date()
    }
    const saved = await this.posts.save(post)
    this.logger.log('Blog post updated', { postId: id })
    return saved
  }

  async remove(id: string): Promise<void> {
    const post = await this.posts.findOne({ where: { id } })
    if (!post) throw new NotFoundException(`Post ${id} not found`)
    await this.posts.softDelete(id)
    this.logger.log('Blog post soft-deleted', { postId: id })
  }
}
