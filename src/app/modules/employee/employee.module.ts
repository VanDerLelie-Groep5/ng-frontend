import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesComponent } from './components/employees/employees.component';
import { SharedModule } from '../shared/shared.module';
import { EmployeeComponent } from './components/employee/employee.component';



@NgModule({
  declarations: [
    EmployeesComponent,
    EmployeeComponent
  ],
  imports: [
    SharedModule
  ]
})
export class EmployeeModule { }
