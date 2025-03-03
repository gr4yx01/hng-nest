import { Global, Module } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { CustomerService } from 'src/customer/customer.service';

@Global()
@Module({
    providers: [CustomerService],
    exports: [CustomerService]
})
export class GlobalModule {}
