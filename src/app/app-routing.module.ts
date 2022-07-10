import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteComponent } from './cliente/cliente.component';
import {FormularioClienteComponent} from "./cliente/formulario-cliente/formulario-cliente.component";
import { ProductoComponent } from './producto/producto.component';

const routes: Routes = [
  { path: 'clientes', component: ClienteComponent },
  { path: 'clientes/crear', component: FormularioClienteComponent },
  { path: 'clientes/editar/:id', component: FormularioClienteComponent },
  { path: 'producto/crear', component: ProductoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
