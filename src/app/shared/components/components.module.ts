import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';

import {
  LucideAngularModule,
  ShoppingCart
} from 'lucide-angular';

import { ProductListComponent } from './product-list/product-list.component';
import { FooterComponent } from './footer/footer.component';
import { CartComponent } from './cart/cart.component';
import { DirectivesModule } from '../directives/directives.module';

const components = [
  ProductListComponent,
  FooterComponent,
  CartComponent,
];

@NgModule({
  declarations: components,
  exports: components,
  imports: [
    CommonModule,
    DirectivesModule,
    MatButtonModule,
    MatTooltipModule,
    LucideAngularModule.pick({
      ShoppingCart
    })
  ],
})
export class ComponentsModule { }
