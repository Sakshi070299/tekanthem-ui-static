import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common'
import { Observable, map } from 'rxjs'

export interface ApiResponse<T> {
  success: true
  data: T
  pagination?: PaginationMeta
}

export interface PaginationMeta {
  page: number
  limit: number
  total: number
  totalPages: number
  hasNext: boolean
  hasPrev: boolean
}

@Injectable()
export class TransformInterceptor<T>
  implements NestInterceptor<T, ApiResponse<T>>
{
  intercept(
    _context: ExecutionContext,
    next: CallHandler<T>,
  ): Observable<ApiResponse<T>> {
    return next.handle().pipe(
      map((data) => {
        // If a handler already returns a shape with pagination, preserve it
        if (
          data &&
          typeof data === 'object' &&
          'data' in (data as object) &&
          'pagination' in (data as object)
        ) {
          const { data: rows, pagination } = data as unknown as {
            data: T
            pagination: PaginationMeta
          }
          return { success: true, data: rows, pagination }
        }
        return { success: true, data }
      }),
    )
  }
}
