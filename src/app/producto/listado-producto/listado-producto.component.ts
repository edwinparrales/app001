import { Component, OnInit } from '@angular/core';
import {ProductoService} from "../../servicios/producto.service";
import {Producto} from "../../modelos/producto.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-listado-producto',
  templateUrl: './listado-producto.component.html',
  styleUrls: ['./listado-producto.component.css']
})
export class ListadoProductoComponent implements OnInit {
  public listaproducto:Array<Producto>;
  routerx:Router;
  constructor(private productoService:ProductoService,private router:Router) {
    this.listaproducto=[];
    this.routerx=router;

  }

  ngOnInit(): void {
    this.listar();
  }

  listar(){
    this.productoService.listar().subscribe(
      data => this.listaproducto=data
    );

  }
  eliminar(e:any){
    let id = parseInt(e.target.id);
    let confirmar = confirm("Esta seguro de eliminar el registro");

    if(confirmar && id>0){
      this.productoService.eliminar(id).subscribe(
        data =>{
          this.listar();
          //this.routerx.navigate(['producto']);
        }

      )
    }else{
      alert("Operacion Cancelada");
    }

  }

}
