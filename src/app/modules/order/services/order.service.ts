import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Order } from '../models/orderDto';


@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private apiUrl: string | undefined;

  constructor(private http: HttpClient) { 
    this.apiUrl = environment.api_base_url + "/orders";
  }

  getOrders() {
    return this.http.get<Order[]>('assets/dummydata/orders.json');
  }

  getOrder() {
    return this.http.get<Order>('assets/dummydata/order.json')
  };
}

