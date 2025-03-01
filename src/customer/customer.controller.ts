import { Body, Controller, Get, Post } from '@nestjs/common';
import { CustomerService } from './customer.service';

@Controller('customer')
export class CustomerController {
    constructor (private customerService: CustomerService) {}

    @Get()
    getAllCustomers() {
        return this.customerService.getAllCustomers()
    }

    @Post()
    createCustomer(@Body() customer: any) {
        return this.customerService.createCustomer(customer)
    }
}
