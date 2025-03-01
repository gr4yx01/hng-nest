import { Body, Controller, ForbiddenException, Get, HttpException, Post } from '@nestjs/common';
import { CustomerService } from './customer.service';

@Controller('customer')
export class CustomerController {
    constructor (private customerService: CustomerService) {}

    @Get()
    getAllCustomers() {
        throw new ForbiddenException('You are not allowed')
        return this.customerService.getAllCustomers()
    }

    @Post()
    createCustomer(@Body() customer: any) {
        return this.customerService.createCustomer(customer)
    }
}
