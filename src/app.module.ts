import { Logger, MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { CustomerModule } from './customer/customer.module';
import { CatsModule } from './cats/cats.module';
import { ProductModule } from './product/product.module';
import { GlobalModule } from './global/global.module';
import middlewares from './middlewares';
import { LoggerMiddleware } from './middlewares/log';
import { Reflector } from '@nestjs/core';
import { ConfigModule, ConfigService } from '@nestjs/config';
import config from './configs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { CacheModule } from '@nestjs/cache-manager';

@Module({
  imports: [
    CustomerModule, 
    CatsModule, 
    ProductModule, 
    GlobalModule,
    MongooseModule.forRootAsync({
      imports: [ConfigModule], 
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get('CONNECTION_STRING')
      }),
      inject: [ConfigService]
    }),
    ConfigModule.forRoot({
      cache: true,
      isGlobal: true,
      load: [config]
    }),
    CacheModule.register({
      isGlobal: true,
      ttl: 30 * 1000,
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
