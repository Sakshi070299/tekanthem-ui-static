import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Ip,
  Param,
  ParseUUIDPipe,
  Post,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common'
import { Request } from 'express'
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger'
import { Throttle } from '@nestjs/throttler'
import { ContactService } from './contact.service'
import { CreateContactDto } from './dto/create-contact.dto'
import { PaginationQueryDto } from '../../common/dto/pagination-query.dto'
import { Public } from '../../common/decorators/public.decorator'
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard'
import { RolesGuard } from '../../common/guards/roles.guard'
import { Roles } from '../../common/decorators/roles.decorator'

@ApiTags('contact')
@Controller('api/contact')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Public()
  @Post()
  @HttpCode(HttpStatus.CREATED)
  @Throttle({ default: { limit: 5, ttl: 60_000 } })
  @ApiOperation({ summary: 'Submit the contact form' })
  @ApiCreatedResponse({ description: 'Submission accepted' })
  submit(
    @Body() dto: CreateContactDto,
    @Ip() ip: string,
    @Req() req: Request,
  ) {
    return this.contactService.submit(dto, {
      ip,
      userAgent: req.headers['user-agent']?.slice(0, 500),
      source: (req.headers.referer as string) ?? 'direct',
    })
  }

  @Get()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin', 'editor')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'List all contact submissions (admin)' })
  @ApiOkResponse({ description: 'Paginated submissions list' })
  list(@Query() query: PaginationQueryDto) {
    return this.contactService.list(query)
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin', 'editor')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get a single submission (admin)' })
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.contactService.findOneOrFail(id)
  }
}
