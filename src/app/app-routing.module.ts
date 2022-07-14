import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteComponent } from './cliente/cliente.component';
import {FormularioClienteComponent} from "./cliente/formulario-cliente/formulario-cliente.component";
import { ProductoComponent } from './producto/producto.component';
import {ListadoProductoComponent} from "./producto/listado-producto/listado-producto.component";

const routes: Routes = [
  { path: 'clientes', component: ClienteComponent },
  { path: 'clientes/crear', component: FormularioClienteComponent },
  { path: 'clientes/editar/:id', component: FormularioClienteComponent },
  { path: 'producto/crear', component: ProductoComponent },
  { path: 'producto/crear/:id', component: ProductoComponent },
  { path: 'producto', component: ListadoProductoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
