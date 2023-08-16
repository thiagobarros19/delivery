import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClickableDirective } from './clickable.directive';

const directives = [
  ClickableDirective
];

@NgModule({
  declarations: directives,
  exports: directives,
  imports: [
    CommonModule
  ]
})
export class DirectivesModule { }
