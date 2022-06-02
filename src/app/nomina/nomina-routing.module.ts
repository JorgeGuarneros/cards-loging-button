import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdministrativoComponent} from "./administrativo/administrativo.component";
import {DocentesComponent} from "./docentes/docentes.component";

const routes: Routes = [
  {path: "", children: [
      {path: "Administrativo", component: AdministrativoComponent},
      {path: "Docente", component: DocentesComponent},
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NominaRoutingModule { }
