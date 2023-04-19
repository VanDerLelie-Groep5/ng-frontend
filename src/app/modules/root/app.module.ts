import { NgModule } from '@angular/core';
import { AuthModule } from '../auth/auth.module';
import { EmployeeModule } from '../employee/employee.module';
import { HomeModule } from '../home/home.module';
import { SharedModule } from '../shared/shared.module';
import { AppComponent } from './app.component';
import { OrderModule } from '../order/order.module';
import { DepartmentModule } from '../department/department.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AuthModule,
    EmployeeModule,
    OrderModule,
    DepartmentModule,
    HomeModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
