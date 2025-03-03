import { Logger, MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { CustomerModule } from './customer/customer.module';
import { CatsModule } from './cats/cats.module';
import { ProductModule } from './product/product.module';
import { GlobalModule } from './global/global.module';
import middlewares from './middlewares';
import { LoggerMiddleware } from './middlewares/log';
import { Reflector } from '@nestjs/core';
import { ConfigModule } from '@nestjs/config';
import config from './configs/config';

@Module({
  imports: [
    CustomerModule, 
    CatsModule, 
    ProductModule, 
    GlobalModule, 
    ConfigModule.forRoot({
      cache: true,
      isGlobal: true,
      load: [config]
    })
  ],
  controllers: [],
  providers: [Logger, Reflector],
})

// To implement middleware
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) { 
    consumer.apply(LoggerMiddleware).forRoutes('*')
  }
}
