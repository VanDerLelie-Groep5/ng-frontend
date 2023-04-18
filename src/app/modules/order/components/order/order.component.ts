import { Component } from '@angular/core';
import { OrderService } from '../../services/order.service';
import { Order } from '../../models/orderDto';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html'
})
export class OrderComponent {

  public order : Order;

  constructor(private orderService : OrderService) {
    this.order = {} as Order
    this.setOrder()
  }

  private setOrder(): void {
    this.orderService.getOrder()
      .subscribe((data: Order) => this.order = data);
  }
}
