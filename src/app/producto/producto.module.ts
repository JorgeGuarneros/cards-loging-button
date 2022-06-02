import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductoRoutingModule } from './producto-routing.module';
import { GaleriaComponent } from './galeria/galeria.component';
import { Producto1Component } from './producto1/producto1.component';
import { Producto2Component } from './producto2/producto2.component';


@NgModule({
  declarations: [
    GaleriaComponent,
    Producto1Component,
    Producto2Component
  ],
  imports: [
    CommonModule,
    ProductoRoutingModule
  ]
})
export class ProductoModule { }
