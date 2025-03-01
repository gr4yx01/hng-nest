import { Controller, Get } from '@nestjs/common';
import { ProductService } from './product.service';
import { CustomerService } from 'src/customer/customer.service';

@Controller('product')
export class ProductController {
  constructor(private readonly customerService: CustomerService) {}

  @Get()
  getCustomerProduct() {
    return this.customerService.getAllCustomers()
  }
}
