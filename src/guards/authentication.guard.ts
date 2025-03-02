import { CanActivate, ExecutionContext, ForbiddenException, HttpException, Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Observable } from "rxjs";

@Injectable()
export class AuthenticationGuard implements CanActivate {
    constructor(private jwtService: JwtService) {}
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const request = context.switchToHttp().getRequest()
        const token = request.headers.authorization.split(' ')[1]

        if(!token) {
            throw new UnauthorizedException()
        }

        try {
            request.user = this.jwtService.verify(token)
        } catch (err) {
            throw new UnauthorizedException()
        }

        return true
    }
}