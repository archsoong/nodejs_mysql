import { Injectable } from '@nestjs/common';
import { PaymentEntity } from './entities/payment.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AppService {

  constructor(
    @InjectRepository(PaymentEntity)
    private readonly paymentRepository: Repository<PaymentEntity>
  ) { }

  getHello(): string {
    return 'Hello World!';
  }

  async getPayment(id: number): Promise<any> {
    const payments = await this.paymentRepository.find({
      where: {
        payment_id: id
      }
    });
    return payments;
  }
}
