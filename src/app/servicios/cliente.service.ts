import { Injectable } from '@angular/core';
import {ClienteModel} from "../modelos/cliente.model";

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  public clientes:Array<ClienteModel>;
  constructor() {
    this.clientes = [
      new ClienteModel(
        5,
        "16942367",
        "Edwin Parrales",
        "Cali",
        "Villanueva",
      "Calle 32 Ni32-04",
        "Epro82@gmail-com",
        "3163502651"),
      new ClienteModel(
        6,
        "565656",
        "Gustavo Petro",
        "Bogota",
        "Kenedy",
        "Calle 32 Ni32-04",
        "kenedy@gmail-com",
        "316355555"),

    ];
  }

  getClientes = () => {
   return this.clientes;
  }
}
