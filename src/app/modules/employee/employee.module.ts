import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesComponent } from './components/employees/employees.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    EmployeesComponent
  ],
  imports: [
    SharedModule
  ]
})
export class EmployeeModule { }
