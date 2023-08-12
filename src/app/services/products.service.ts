import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Menu } from '../model/application';

const api = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private readonly _http: HttpClient
  ) { }

  public getProducts(): Observable<Menu> {
    return this._http.get<Menu>(`${api}/menu`);
  }
}
