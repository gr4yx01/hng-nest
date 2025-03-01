import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { CustomerModule } from 'src/customer/customer.module';
import { CatsModule } from 'src/cats/cats.module';

@Module({
  controllers: [ProductController],
  providers: [ProductService]
})
export class ProductModule {}
