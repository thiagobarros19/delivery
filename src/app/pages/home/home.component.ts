import { Component, OnInit } from '@angular/core';
import { Menu, Product } from 'src/app/model/application';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  public menu: Menu = {};

  constructor(
    private readonly _productService: ProductsService,
    private readonly _cartService: CartService
  ) {}

  ngOnInit(): void {
    this._getProducts();
  }

  private _getProducts(): void {
    this._productService.getProducts()
      .subscribe(menu => {
        this.menu = menu
      })
  }

  public onClickProduct(product: Product): void {
    this._cartService.pushProduct(product);
  }

}
