import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Order } from '../models/orderDto';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private apiUrl: string | undefined;

  constructor(private http: HttpClient) { 
    this.apiUrl = environment.api_base_url + "/Order";
  }

  public getOrders() : Observable<Order[]> {
    return this.http.get<Order[]>(this.apiUrl!);
  }

  public getOrder(id : string) : Observable<Order[]> {
    return this.http.get<Order[]>(this.apiUrl! + `/${id}`)
  }

  public postOrder(order : Order) : Observable<Object> {
    return this.http.post<Object>(this.apiUrl!, order);
  }

  public updateOrder(order : Order) : Observable<Object> {
    return this.http.put<Object>(this.apiUrl!, order);
  }
}

