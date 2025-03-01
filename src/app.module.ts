import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { CustomerModule } from './customer/customer.module';
import { CatsModule } from './cats/cats.module';
import { ProductModule } from './product/product.module';
import { GlobalModule } from './global/global.module';
import middlewares from './middlewares';

@Module({
  imports: [CustomerModule, CatsModule, ProductModule, GlobalModule],
  controllers: [],
  providers: [],
})

// To implement middleware
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(middlewares).forRoutes()
  }
}
