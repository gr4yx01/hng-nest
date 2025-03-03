import { Body, Controller, ForbiddenException, Get, Headers, HttpException, ParseIntPipe, Post, Query, Req, UseGuards, UseInterceptors, UsePipes } from '@nestjs/common';
import { CustomerService } from './customer.service';
import TestPipe from 'src/pipes/test.pipe';
import { CustomerDto } from 'src/dto/customer.dto';
import { AuthenticationGuard } from 'src/guards/authentication.guard';
import { AuthorizationGuard } from 'src/guards/authorization.guard';
import { Roles } from 'src/decorator/role.decorator';
import { CustomerInterceptor } from 'src/interceptor/customer.interceptor';

@Roles(['admin'])
@UseInterceptors(CustomerInterceptor)
@UseGuards(AuthenticationGuard, AuthorizationGuard)
@Controller('customer')
export class CustomerController {
    constructor (private customerService: CustomerService) {}
    
    @Get()
    getAllCustomers(@Req() { user }, @Headers('accept_language') language) {
        return [
            {
                'name': 'John Doe',
                'age': 19
            },
            {
                'name': 'Felicia Joy',
                'age': 20
            },
            {
                'name': 'Anita Bejoyful',
                'age': 23
            },
        ]
    }

    @Post()
    createCustomer(@Body() customer: CustomerDto) {
        return this.customerService.createCustomer(customer)
    }
}
