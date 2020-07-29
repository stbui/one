import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LayoutService } from './layout.service';

export interface Response<T> {
  statusCode: number;
  message: string;
  data: T;
}

@Injectable()
export class LayoutInterceptor<T> implements NestInterceptor<T, Response<T>> {
  constructor(private service: LayoutService) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map(data => {
        const request = context.switchToHttp().getRequest();
        const menus = this.service.getMenu();
        const setting = this.service.getSetting();
        return { menus, setting, ...data, request: request };
      }),
    );
  }
}
