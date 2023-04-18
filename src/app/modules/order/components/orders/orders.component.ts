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
    this.setOrders()

    this.orderTableColNames = [
      "Id",
      "Nummer",
      "Klantgroep",
      "Status",
      "Product",
      "Stofnaam",
      "Gereed",
      "MPG",
      "Units"
    ]
  }

  ngOnInit(): void {
    console.log(this.orders)
  }

  private setOrders(): void {
    this.orderService.getOrders()
      .subscribe((data: Order[]) => this.orders = data);
  }
}
