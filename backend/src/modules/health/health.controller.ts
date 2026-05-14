import { Controller, Get } from '@nestjs/common'
import { ApiOperation, ApiTags } from '@nestjs/swagger'
import { Public } from '../../common/decorators/public.decorator'

@ApiTags('health')
@Controller('api/health')
export class HealthController {
  @Public()
  @Get()
  @ApiOperation({ summary: 'Liveness probe' })
  health() {
    return {
      status: 'ok',
      service: 'tekanthem-backend',
      timestamp: new Date().toISOString(),
      uptime: Math.round(process.uptime()),
    }
  }
}
