import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdministrativoComponent} from "../nomina/administrativo/administrativo.component";
import {DocentesComponent} from "../nomina/docentes/docentes.component";
import {GaleriaComponent} from "./galeria/galeria.component";
import {Producto1Component} from "./producto1/producto1.component";
import {Producto2Component} from "./producto2/producto2.component";

const routes: Routes = [
  {path: "", children: [
      {path: "galeria", component: GaleriaComponent},
      {path: "producto/:id", component: Producto1Component},
      {path: "producto2", component: Producto2Component},
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductoRoutingModule { }
