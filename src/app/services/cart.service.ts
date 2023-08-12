import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../model/application';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private _products: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]);

  public getProduct(id: number): Product | undefined {
    return this._products.value.find(product => product.id === id);
  }

  public getProducts(): Observable<Product[]> {
    return this._products.asObservable();
  }

  public pushProduct(product: Product): void {
    const currentValue = this._products.value;
    const updatedValue = [...currentValue, product];

    this._products.next(updatedValue);
  }

  public removeProduct(id: number): void {
    const currentValue = this._products.value;
    const productIndex = currentValue.findIndex(product => product.id === id);

    currentValue.splice(productIndex, 1);
    this._products.next(currentValue);
  }

  public clear(): void {
    this._products.next([]);
  }
}
