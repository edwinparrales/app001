import { Component, OnInit } from '@angular/core';
import {ClienteModel} from "../modelos/cliente.model";
import {ClienteService} from "../servicios/cliente.service";


@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css'],

})
export class ClienteComponent implements OnInit {
  public clientes:Array<ClienteModel>;
  public clienteService:ClienteService;
  constructor( clService:ClienteService) {
     this.clientes =[];
     this.clienteService=clService;
  }

  ngOnInit(): void {
    this.clientes= this.clienteService.getClientes();
  }




}
