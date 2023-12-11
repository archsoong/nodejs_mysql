
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity("payment")
export class PaymentEntity {
  @PrimaryGeneratedColumn()
  payment_id: number;

  @Column()
  customer_id: number;

  @Column()
  staff_id: number;

  @Column()
  rental_id: number;

  @Column()
  amount: number;

  @Column({ type: "datetime" })
  payment_date: Date;

  @Column({ type: "timestamp" })
  last_update: Date;
}