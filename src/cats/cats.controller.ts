import { Controller, Get } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CustomerService } from 'src/customer/customer.service';

@Controller('cats')
export class CatsController {
    constructor(private catService: CatsService, private customerService: CustomerService) {}

    @Get()
    getAllCat() {
        return this.catService.getAllCat();
    }

    @Get('customer')
    getCatCustomer() {
        return this.customerService.getAllCustomers();
    }
}
