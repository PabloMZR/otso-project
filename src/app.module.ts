import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmployeesModule } from './employees/employees.module';
import { ProductsModule } from './products/products.module';
import * as dotenv from 'dotenv';
dotenv.config();

console.log('DB_HOST:', process.env.host);
console.log('DB_PORT:', process.env.port);
console.log('DB_NAME:', process.env.name);
console.log('DB_PASS:', process.env.pass);

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "postgres",
      host: "localhost",
      port: 5432,
      username: 'postgres',
      password: "kakita420",
      database: "otso_db",
      entities: [],
      synchronize: true,
    }), EmployeesModule, ProductsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
