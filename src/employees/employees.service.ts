import { Injectable } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';

@Injectable()
export class EmployeesService {
  private employees: CreateEmployeeDto[] = [
    {
    id: 1,
    name: "Alberto",
    lastName: "Costas",
    phoneNumber: "123456789"
    },
    {
    id: 2,
    name: "Jose",
    lastName: "Casas",
    phoneNumber: "213456789"
    },
    {
    id: 3,
    name: "Juan",
    lastName: "Perez",
    phoneNumber: "312456789"
    }
]
  create(createEmployeeDto: CreateEmployeeDto) {
    createEmployeeDto.id = this.employees.length + 1;
    this.employees.push(createEmployeeDto);
    return createEmployeeDto;
  }

  findAll() {
    //hacer que retorne todos los empleados
    return this.employees;

  }

    findOne(id: number) {
    const employee = this.employees.filter((employee) => employee.id === id)[0];
    return employee;
  }

  update(id: number, updateEmployeeDto: UpdateEmployeeDto) {
    let employeeToUpdate = this.findOne(id);
    employeeToUpdate = {
      ... employeeToUpdate,
      ... updateEmployeeDto
    }
    this.employees = this.employees.map((employee) => {
      if (employee.id === id) {
      }
      return employee;
    })
    return employeeToUpdate;
  }
  //comenzamos aqui!
  remove(id: number) {
    this.employees = this.employees.filter((employee) => employee.id !== id);
  return this.employees;    
  }
}
