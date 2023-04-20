import { Component, OnInit } from '@angular/core';
import { Order } from '../../models/orderDto';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html'
})
export class OrdersComponent implements OnInit {

  public orders : Order[];
  public orderTableColNames = new Array()

  constructor(private orderService : OrderService) {
    this.orders = new Array({} as Order)

    this.orderTableColNames = [
      "Id",
      "Nummer",
      "Klantgroep",
      "Status",
      "Product",
      "Stofnaam",
      "Gereed",
      "Shift",
      "Units"
    ]
  }

  ngOnInit(): void {
    this.setOrders()
  }

  private setOrders(): void {
    this.orderService.getOrders()
      .subscribe((data: Order[]) => this.orders = data);
  }
}
