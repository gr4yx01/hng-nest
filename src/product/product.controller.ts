import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProductService } from './product.service';
import { CustomerService } from 'src/customer/customer.service';
import { ConfigService } from '@nestjs/config';
import { ProductDto } from './product.dto';

@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Post()
  createProduct(@Body() product: ProductDto) {
    return this.productService.createProduct(product)
  }

  @Get()
  getCustomerProduct() {
    return this.productService.getAllCustomers()
  }
}
