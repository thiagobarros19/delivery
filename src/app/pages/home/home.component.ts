import { Component, OnInit } from '@angular/core';
import { Menu, Product } from 'src/app/model/application';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  public menu: Menu = {};

  constructor() {}

  ngOnInit(): void {
  }

}
