import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersComponent } from './components/orders/orders.component';
import { SharedModule } from '../shared/shared.module';
import { OrderComponent } from './components/order/order.component';



@NgModule({
  declarations: [
    OrdersComponent,
    OrderComponent
  ],
  imports: [
    SharedModule
  ]
})
export class OrderModule { }
