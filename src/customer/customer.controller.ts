import { Body, Controller, ForbiddenException, Get, HttpException, ParseIntPipe, Post, Query, Req, UseGuards, UsePipes } from '@nestjs/common';
import { CustomerService } from './customer.service';
import TestPipe from 'src/pipes/test.pipe';
import { CustomerDto } from 'src/dto/customer.dto';
import { AuthenticationGuard } from 'src/guards/authentication.guard';
import { AuthorizationGuard } from 'src/guards/authorization.guard';
import { Roles } from 'src/decorator/role.decorator';

@Roles(['admin'])
@UseGuards(AuthenticationGuard, AuthorizationGuard)
@Controller('customer')
export class CustomerController {
    constructor (private customerService: CustomerService) {}

    @Get()
    getAllCustomers(@Req() { user }) {
        console.log(user)
        return this.customerService.getAllCustomers()
    }

    @UsePipes(TestPipe)
    @Post()
    createCustomer(@Body() customer: CustomerDto) {
        return this.customerService.createCustomer(customer)
    }
}
