import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
  Logger,
} from '@nestjs/common'
import { Request, Response } from 'express'

interface ErrorResponseBody {
  success: false
  error: {
    code: string
    message: string
    statusCode: number
    details?: unknown
  }
}

@Catch()
export class GlobalExceptionFilter implements ExceptionFilter {
  private readonly logger = new Logger(GlobalExceptionFilter.name)

  catch(exception: unknown, host: ArgumentsHost): void {
    const ctx = host.switchToHttp()
    const response = ctx.getResponse<Response>()
    const request = ctx.getRequest<Request>()

    let status = HttpStatus.INTERNAL_SERVER_ERROR
    let message = 'Internal server error'
    let code = 'INTERNAL_ERROR'
    let details: unknown = undefined

    if (exception instanceof HttpException) {
      status = exception.getStatus()
      const responseBody = exception.getResponse()
      if (typeof responseBody === 'string') {
        message = responseBody
      } else if (typeof responseBody === 'object' && responseBody !== null) {
        const body = responseBody as Record<string, unknown>
        message = (body.message as string) ?? message
        code = (body.code as string) ?? exception.name
          .replace('Exception', '')
          .replace(/([a-z])([A-Z])/g, '$1_$2')
          .toUpperCase()
        details = Array.isArray(body.message) ? body.message : undefined
      }
    } else if (exception instanceof Error) {
      this.logger.error(exception.message, exception.stack)
    }

    const body: ErrorResponseBody = {
      success: false,
      error: { code, message, statusCode: status, details },
    }

    if (status >= 500) {
      this.logger.error(
        `${request.method} ${request.url} -> ${status} ${message}`,
      )
    }

    response.status(status).json(body)
  }
}
