import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import { Observable, map } from "rxjs";

@Injectable()
export class CustomerInterceptor implements NestInterceptor {
    async intercept(context: ExecutionContext, next: CallHandler<any>): Promise<Observable<any>> {
        const request = context.switchToHttp().getRequest()

        request.headers['accept_language'] = 'fr'

        const response = next.handle().pipe(map(data => ({ data, timestamp: new Date() })))

        return response
    }
}