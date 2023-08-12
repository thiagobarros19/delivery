import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Order } from '../model/application';

const api = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(
    private readonly _http: HttpClient
  ) { }

  public getOrders(): Observable<Order[]> {
    return this._http.get<Order[]>(`${api}/orders`);
  }

  public getOrder(id: number): Observable<Order[]> {
    return this._http.get<Order[]>(`${api}/orders/${id}`);
  }

  public postOrder(order: Order): Observable<Order[]> {
    return this._http.post<Order[]>(`${api}/orders`, order);
  }

  public putOrder(id:number, order: Order): Observable<Order[]> {
    return this._http.put<Order[]>(`${api}/orders/${id}`, order);
  }

  public patchOrder(id:number, order: Order): Observable<Order[]> {
    return this._http.patch<Order[]>(`${api}/orders/${id}`, order);
  }

  public deleteOrder(id:number): Observable<Order[]> {
    return this._http.delete<Order[]>(`${api}/orders/${id}`);
  }
}
