import { Body, Controller, Get, Post, UseInterceptors } from '@nestjs/common';
import { ProductService } from './product.service';
import { CustomerService } from 'src/customer/customer.service';
import { ConfigService } from '@nestjs/config';
import { ProductDto } from './product.dto';
import { CacheInterceptor, CacheTTL } from '@nestjs/cache-manager';

@UseInterceptors(CacheInterceptor)
@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Post()
  createProduct(@Body() product: ProductDto) {
    return this.productService.createProduct(product)
  }

  @CacheTTL(60 * 1000)
  @Get()  
  getAllProduct() {
    console.log('INSIDE CONTROLLER')
    return this.productService.getAllProducts()
  }
}
