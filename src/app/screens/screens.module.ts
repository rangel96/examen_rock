import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioComponent } from './inicio/inicio.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { ContactanosComponent } from './contactanos/contactanos.component';
import { ScreensRoutingModule } from './screens-routing.module';



@NgModule({
  declarations: [
    InicioComponent,
    QuienesSomosComponent,
    ContactanosComponent
  ],
  imports: [
    CommonModule,
    ScreensRoutingModule
  ]
})
export class ScreensModule { }
