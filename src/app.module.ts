import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { PaymentEntity } from './entities/payment.entity';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
  }),
  TypeOrmModule.forRoot({
    type: "mysql",
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT) || 3306,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [__dirname + "/**/*.entity{.ts,.js}"],
    synchronize: process.env.NODE_ENV === "local" ? true : false,
    keepConnectionAlive: true,
    timezone: "Z",
  }),
  TypeOrmModule.forFeature([PaymentEntity]),
  ],
  controllers: [AppController],
  providers: [AppService,],
})
export class AppModule { }
