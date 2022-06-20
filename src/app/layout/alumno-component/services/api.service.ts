import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {ListaAlumnosI} from '../../../layout/alumno-component/modelos/listaalumnos.interface';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url:string="https://us-central1-sistema-colegio-4a695.cloudfunctions.net/app/alumnos"

  constructor(
    private http:HttpClient
  ) { 

  }

  getAllAlumnos(page:number):Observable<ListaAlumnosI[]>{
    let direccion= this.url 
    return  this.http.get<ListaAlumnosI[]>(direccion);
  }
}
