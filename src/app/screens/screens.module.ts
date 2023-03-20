import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioComponent } from './inicio/inicio.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { ScreenRoutingModule } from './screen-routing.module';



@NgModule({
  declarations: [
    InicioComponent,
    QuienesSomosComponent
  ],
  imports: [
    CommonModule,
    ScreenRoutingModule
  ]
})
export class ScreensModule { }
