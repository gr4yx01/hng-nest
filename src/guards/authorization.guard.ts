import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { Observable } from "rxjs";
import { ROLES_KEY } from "src/decorator/role.decorator";

@Injectable()
export class AuthorizationGuard implements CanActivate {
    constructor(private reflector: Reflector) {}
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const request = context.switchToHttp().getRequest()

        try {
            const requiredRoles = this.reflector.get(ROLES_KEY, context.getClass())

            if(requiredRoles.includes(request.user.role)) {
                return true
            }
            
        } catch (err) {
            throw new UnauthorizedException()
        }

        return false
    }
}