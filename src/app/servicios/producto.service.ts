import { Injectable } from '@angular/core';
import {ClienteModel} from "../modelos/cliente.model";
import {Producto} from "../modelos/producto.model";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  public productos:Array<Producto>;
  private urlEndPoint:string
  private httpHeaders = new HttpHeaders({'Content-Type':'application/json','Access-Control-Allow-Origin':'*'});
  constructor(private httpClient: HttpClient) {
    this.productos = [];
    this.urlEndPoint="http://localhost:8080/api/producto/"
  }



  listar(): Observable<Producto[]>{
    return this.httpClient.get(this.urlEndPoint+"listar").pipe(
      map((response:any) => response as Producto[])
    );
  }
  crear(producto:Producto):Observable<Producto>{

    return this.httpClient.post<Producto>(this.urlEndPoint+"crear",producto,{headers:this.httpHeaders});
  }
  eliminar = (id:number):Observable<any>=>{
    return this.httpClient.delete(`${this.urlEndPoint}${id}`);
  }
  actualizar(id: any, data: Producto): Observable<Producto> {
    return this.httpClient.put(`${this.urlEndPoint}actualizar/${id}`,data,{headers:this.httpHeaders})
      .pipe(
        map((response:any) => response as Producto))
  }

  buscar = (id:number):Observable<any>=>{
    return this.httpClient.get(`${this.urlEndPoint}buscarid/${id}`);
  }

}
