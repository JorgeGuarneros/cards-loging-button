import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "./body/login/login.component";
import { SignupComponent } from "./body/signup/signup.component";
import { ForgotComponent } from "./body/forgot/forgot.component";
import { ContactoComponent } from "./body/contacto/contacto.component";
import { ErrorComponent } from "./body/error/error.component";
import {MenunominaComponent} from "./nomina/menunomina/menunomina.component";
import {GaleriaComponent} from "./producto/galeria/galeria.component";
import { NavbarComponent } from './head/navbar/navbar.component';


const routes: Routes = [
  {path: "login", component: LoginComponent},
  {path: "signup", component: SignupComponent},
  {path: "forgot", component: ForgotComponent},
  {path: "contacto", component: ContactoComponent},

  {path: "nomina", component: MenunominaComponent},
  {path: "nomina",
  loadChildren: () => import("./nomina/nomina.module").then(mod => mod.NominaModule)},

  {path: "producto", component: GaleriaComponent},
  {path: "producto",
    loadChildren: () => import("./producto/producto.module").then(mod => mod.ProductoModule)},

  {path: "error", component: ErrorComponent},
  {path: "**", redirectTo: "error", pathMatch: "full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
