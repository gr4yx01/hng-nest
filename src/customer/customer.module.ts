import { Module } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CustomerController } from './customer.controller';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: '384xhdf892348hdfs',
      signOptions: { expiresIn: '60s' }
    })
  ],
  providers: [],
  controllers: [CustomerController]
})
export class CustomerModule {}
