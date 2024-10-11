import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResponseLista } from '../pages/modelo/ResponseLista';
import { Programador } from '../pages/modelo/Programador';
@Injectable({
  providedIn: 'root'
})
export class ProgramadorService {
  private apiBase:string="http://localhost:8080";

  constructor(private http:HttpClient) { }

  getProgramadores(){
    return this.http.get<ResponseLista>(this.apiBase+"/programador/lista");
  }
  saveProgramador(bean:Programador){
    return this.http.post(this.apiBase+"/programador/registrar",bean);
  }
}
