import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { CustomerModule } from 'src/customer/customer.module';
import { CatsModule } from 'src/cats/cats.module';
import { MongooseModule } from '@nestjs/mongoose';
import { Product, ProductSchema } from './product.schema';

@Module({
  imports: [MongooseModule.forFeature([
    {name: Product.name, schema: ProductSchema}
  ])],
  controllers: [ProductController],
  providers: [ProductService]
})
export class ProductModule {}
