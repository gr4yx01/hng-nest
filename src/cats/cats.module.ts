import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import { CustomerModule } from 'src/customer/customer.module';

@Module({
  controllers: [CatsController],
  providers: [CatsService]
})
export class CatsModule {}
