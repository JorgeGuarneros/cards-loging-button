import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './head/navbar/navbar.component';
import { LoginComponent } from './body/login/login.component';
import { SignupComponent } from './body/signup/signup.component';
import { ForgotComponent } from './body/forgot/forgot.component';
import { FooterComponent } from './footer/footer/footer.component';
import { ContactoComponent } from './body/contacto/contacto.component';
import { ErrorComponent } from './body/error/error.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    SignupComponent,
    ForgotComponent,
    FooterComponent,
    ContactoComponent,
    ErrorComponent,
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
