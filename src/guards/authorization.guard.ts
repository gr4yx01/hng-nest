import { CanActivate, ExecutionContext } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { Observable } from "rxjs";
import { ROLES_KEY } from "src/decorator/role.decorator";

export class AuthorizationGuard implements CanActivate {
    constructor(private reflector: Reflector) {}
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const request = context.switchToHttp().getRequest()

        try {
            const requiredRoles = this.reflector.get(ROLES_KEY, context.getClass())
            
            console.log(requiredRoles)
        } catch (err) {
            console.log(err)
            return false
        }
        // const requiredRoles = this.reflector.get(ROLES_KEY, context.getClass())

        // console.log(requiredRoles)

        // if(request.user.role !== 'admin') {
        //     return false
        // }

        return true
    }
}