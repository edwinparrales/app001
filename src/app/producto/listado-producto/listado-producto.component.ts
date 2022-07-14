import { Component, OnInit } from '@angular/core';
import {ProductoService} from "../../servicios/producto.service";
import {Producto} from "../../modelos/producto.model";

@Component({
  selector: 'app-listado-producto',
  templateUrl: './listado-producto.component.html',
  styleUrls: ['./listado-producto.component.css']
})
export class ListadoProductoComponent implements OnInit {
  public listaproducto:Array<Producto>;
  constructor(private productoService:ProductoService) {
    this.listaproducto=[];
    this.listar();
  }

  ngOnInit(): void {
  }

  listar(){
    this.productoService.listar().subscribe(
      data => this.listaproducto=data
    );

  }

}
