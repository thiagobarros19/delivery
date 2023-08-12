import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/model/application';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {

  @Input()
  public title: string = '';

  @Input()
  public products: Product[] = [];

  @Output()
  public onClick: EventEmitter<Product> = new EventEmitter<Product>();
}
