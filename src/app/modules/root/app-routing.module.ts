import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from '../auth/signin/signin.component';
import { EmployeesComponent } from '../employee/components/employees/employees.component';
import { HomeComponent } from '../home/components/home/home.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "signin", component: SigninComponent },
  { path: "employees", component: EmployeesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
