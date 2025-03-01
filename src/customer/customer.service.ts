import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomerService {
    customers: any = []

    getAllCustomers() {
        return this.customers
    }

    createCustomer(customer) {
        return this.customers.push(customer)
    }
}
