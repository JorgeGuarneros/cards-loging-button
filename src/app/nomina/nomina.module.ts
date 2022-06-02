import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NominaRoutingModule } from './nomina-routing.module';
import { MenunominaComponent } from './menunomina/menunomina.component';
import { AdministrativoComponent } from './administrativo/administrativo.component';
import { DocentesComponent } from './docentes/docentes.component';


@NgModule({
  declarations: [
    MenunominaComponent,
    AdministrativoComponent,
    DocentesComponent
  ],
  imports: [
    CommonModule,
    NominaRoutingModule
  ]
})
export class NominaModule { }
