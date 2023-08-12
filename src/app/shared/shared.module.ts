import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from './components/components.module';
import { DirectivesModule } from './directives/directives.module';
import { DialogsModule } from './dialogs/dialogs.module';



@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    DirectivesModule,
    DialogsModule
  ],
  exports: [
    ComponentsModule,
    DirectivesModule,
    DialogsModule
  ]
})
export class SharedModule { }
