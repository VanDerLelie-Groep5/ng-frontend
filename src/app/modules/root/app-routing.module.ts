import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from '../auth/signin/signin.component';
import { EmployeesComponent } from '../employee/components/employees/employees.component';
import { HomeComponent } from '../home/components/home/home.component';
import { OrdersComponent } from '../order/components/orders/orders.component';
import { OrderComponent } from '../order/components/order/order.component';
import { EmployeeComponent } from '../employee/components/employee/employee.component';
import { DepartmentsComponent } from '../department/components/departments/departments.component';
import { DepartmentComponent } from '../department/components/department/department.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "signin", component: SigninComponent },
  { path: "employees", component: EmployeesComponent },
  { path: "employees/new", component: EmployeeComponent },
  { path: "employees/:id", component: EmployeeComponent },
  { path: "orders", component: OrdersComponent },
  { path: "orders/new", component: OrderComponent },
  { path: "orders/:id", component: OrderComponent },
  { path: "departments", component: DepartmentsComponent },
  { path: "departments/new", component: DepartmentComponent },
  { path: "departments/:id", component: DepartmentComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
