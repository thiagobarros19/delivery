import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import {
  LucideAngularModule,
  Dot,
  MapPin
} from 'lucide-angular';


@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    LucideAngularModule.pick({
      Dot,
      MapPin
    })
  ]
})
export class PagesModule { }
