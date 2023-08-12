import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

import { Product } from 'src/app/model/application';
import { CartService } from 'src/app/services/cart.service';
import { OrdersService } from 'src/app/services/orders.service';
import { OrderComponent } from 'src/app/shared/dialogs/order/order.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  public products: Product[] = []

  constructor (
    private readonly _dialog: MatDialog
  ) {}

  ngOnInit(): void {
  }

  public getTotalValue(products: Product[]): number {
    return products.reduce((previos, product) => previos + product.price, 0);
  }

  public openOrderDialog(): void {
    this._dialog.open(OrderComponent)
      .afterClosed()
  }

}
