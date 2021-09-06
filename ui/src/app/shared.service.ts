import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SharedService {

  readonly APIUrl="http://localhost:55308/api"

  constructor(private http:HttpClient) { }

  getPedList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/pedidos');
  }

  addPedido(val:any){
    return this.http.post(this.APIUrl+ '/pedidos', val);
  }
  updatePedido(val:any){
    return this.http.put(this.APIUrl+ '/pedidos', val);
  }
  deletePedido(val:any){
    return this.http.delete(this.APIUrl+'/pedidos/'+val);
  }
  getAllPedido():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+ '/pedidos/gettudonome');
  }
  descontoPedido10(val:any){
    return this.http.put(this.APIUrl+ '/pedidos/desconto10', val);
  }
  descontoPedido25(val:any){
    return this.http.put(this.APIUrl+ '/pedidos/desconto25', val);
  }
  descontoPedido50(val:any){
    return this.http.put(this.APIUrl+ '/pedidos/desconto50', val);
  }
  descontoPedido75(val:any){
    return this.http.put(this.APIUrl+ '/pedidos/desconto75', val);
  }
}
