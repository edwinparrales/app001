import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Producto } from '../modelos/producto.model';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  productoForm: any ;
  constructor(private pf: FormBuilder) { 
    this.crearFormulario();
  }

  ngOnInit(): void {
  }
  crearFormulario(){
    this.productoForm = this.pf.group({
      id: ['',Validators.compose([
        Validators.required
      ])],
      codigo: [''],
      nombre:[''],
      marca:[''],
      modelo:[''],
      cantidad:[''],
      valor:[''],
    });
  }

  onSubmit(){
    if(this.productoForm.controls.id.errors){
      alert("El id no puede ser vacio")
    }
    console.log("sunb",this.productoForm.controls['nombre'],
    
    this.productoForm.controls['id']
    );
  }
}
