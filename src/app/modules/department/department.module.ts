import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartmentsComponent } from './components/departments/departments.component';
import { DepartmentComponent } from './components/department/department.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    DepartmentsComponent,
    DepartmentComponent
  ],
  imports: [
    SharedModule
  ]
})
export class DepartmentModule { }
