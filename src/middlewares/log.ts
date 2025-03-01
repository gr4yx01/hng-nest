import { Logger, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";

export class LoggerMiddleware implements NestMiddleware {
    constructor(private logger: Logger) {}
    use(req: Request, res: Response, next: NextFunction) {
        const { ip, method, originalUrl } = req;

        const reqtime = new Date().getTime();

        res.on('finish', () => {
            const restime = new Date().getTime() - reqtime;
            
            if(res.statusCode == 200 || res.statusCode == 201) {
                this.logger.log(`${method}/${ip} ${originalUrl} ${res.statusCode} ${restime}ms`);
            }
        })
        next();
    }
}