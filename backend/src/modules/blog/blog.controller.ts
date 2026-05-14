import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common'
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger'
import { BlogService } from './blog.service'
import { CreatePostDto, UpdatePostDto } from './dto/create-post.dto'
import { PaginationQueryDto } from '../../common/dto/pagination-query.dto'
import { Public } from '../../common/decorators/public.decorator'
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard'
import { RolesGuard } from '../../common/guards/roles.guard'
import { Roles } from '../../common/decorators/roles.decorator'

@ApiTags('blog')
@Controller('api/blog')
export class BlogController {
  constructor(private readonly blogService: BlogService) {}

  @Public()
  @Get('posts')
  @ApiOperation({ summary: 'List published posts (public)' })
  @ApiOkResponse({ description: 'Paginated posts list' })
  list(
    @Query() query: PaginationQueryDto,
    @Query('category') category?: string,
  ) {
    return this.blogService.listPublished(query, category)
  }

  @Public()
  @Get('posts/:slug')
  @ApiOperation({ summary: 'Get a single published post by slug (public)' })
  findBySlug(@Param('slug') slug: string) {
    return this.blogService.findBySlug(slug)
  }

  @Post('posts')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin', 'editor')
  @ApiBearerAuth()
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Create a new post (admin/editor)' })
  @ApiCreatedResponse({ description: 'Post created' })
  create(@Body() dto: CreatePostDto) {
    return this.blogService.create(dto)
  }

  @Patch('posts/:id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin', 'editor')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Update an existing post (admin/editor)' })
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: UpdatePostDto,
  ) {
    return this.blogService.update(id, dto)
  }

  @Delete('posts/:id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  @ApiBearerAuth()
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Soft-delete a post (admin)' })
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.blogService.remove(id)
  }
}
