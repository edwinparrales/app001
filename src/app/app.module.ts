import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClienteComponent } from './cliente/cliente.component';
import { FormularioClienteComponent } from './cliente/formulario-cliente/formulario-cliente.component';
import { ProductoComponent } from './producto/producto.component';

@NgModule({
  declarations: [
    AppComponent,
    ClienteComponent,
    FormularioClienteComponent,
    ProductoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule ,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
