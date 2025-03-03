import { Controller, Get } from '@nestjs/common';
import { ProductService } from './product.service';
import { CustomerService } from 'src/customer/customer.service';
import { ConfigService } from '@nestjs/config';

@Controller('product')
export class ProductController {
  constructor(private readonly customerService: CustomerService, private configService: ConfigService) {}

  @Get()
  getCustomerProduct() {
    console.log(this.configService.get('port'))
    return this.customerService.getAllCustomers()
  }
}
