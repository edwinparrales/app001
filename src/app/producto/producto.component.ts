import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Producto} from '../modelos/producto.model';
import {ProductoService} from "../servicios/producto.service";
import {ActivatedRoute, ParamMap, Params} from "@angular/router";


@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  productoForm: any;
  producto: any;

  constructor(private pf: FormBuilder, private prodService: ProductoService, private activatedRoute: ActivatedRoute
  ) {
    this.crearFormulario();
  }

  ngOnInit(): void {
    this.editar();
  }

  crearFormulario() {
    this.productoForm = this.pf.group({
      id: [''],
      codigo: ['', Validators.compose([Validators.required])],
      descripcion: ['', Validators.compose([Validators.required])],
      marca: ['GENERICO'],
      modelo: ['GENERICO'],
      cantidad: ['', Validators.compose([Validators.required])],
      capacidad: [''],
      categoria: ['VARIOS', Validators.compose([Validators.required])],
      valor: ['0', Validators.compose([Validators.required, Validators.min(0)])],
    });
  }

  onSubmit() {
    if (this.productoForm.status === "INVALID") {
      alert("Error en los campos del formulario")
      console.log("errod", this.productoForm);

      return;
    } else {
      console.log("Enviando los datos..");
      this.crear();
    }


  }

  cleanFrm() {
    console.log("clean")
    this.productoForm.reset();
  }


  crear = () => {
    const pro: Producto = {
      id: this.productoForm.controls.id.value,
      codigo: this.productoForm.controls.codigo.value,
      descripcion: this.productoForm.controls.descripcion.value,
      marca: this.productoForm.controls.marca.value,
      modelo: this.productoForm.controls.modelo.value,
      capacidad: this.productoForm.controls.capacidad.value,
      valor: this.productoForm.controls.valor.value,
      cantidad: this.productoForm.controls.cantidad.value,
      categoria: this.productoForm.controls.categoria.value,


    }
    if(pro.id>=1){
      this.prodService.actualizar(pro.id,pro).subscribe(
        data => console.log("Actualizando",data)
      )

    }else{
      this.prodService.crear(pro).subscribe(
        data => console.log("Creando",data)
      );
    }



  }

  //editar

  editar() {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      console.log(params);
      const id: any = params.get('id') || null;
      console.log(id)
      if (parseInt(id) > 0) {
        this.prodService.buscar(id).subscribe(
          data => {
            this.producto = data
            console.log(this.producto)

            this.productoForm.controls['id'].setValue(this.producto.id);
            this.productoForm.controls['codigo'].setValue(this.producto.codigo);
            this.productoForm.controls['descripcion'].setValue(this.producto.descripcion);
            this.productoForm.controls['marca'].setValue(this.producto.marca);
            this.productoForm.controls['modelo'].setValue(this.producto.modelo);
            this.productoForm.controls['capacidad'].setValue(this.producto.capacidad);
            this.productoForm.controls['valor'].setValue(this.producto.valor);
            this.productoForm.controls['cantidad'].setValue(this.producto.cantidad);
            this.productoForm.controls['categoria'].setValue(this.producto.categoria);

          }
        );


      }

    });

  }

}
