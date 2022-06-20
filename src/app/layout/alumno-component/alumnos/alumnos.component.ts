import { Component, OnInit } from '@angular/core';
import {ApiService} from '../services/api.service'
import {Router} from '@angular/router'
import { ListaAlumnosI} from '../../alumno-component/modelos/listaalumnos.interface'

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit {

  alumnos : ListaAlumnosI[];

  constructor(private api:ApiService, private router:Router) { }

  ngOnInit(): void {
    this.api.getAllAlumnos(1).subscribe(data=>{
      this.alumnos = data;
      console.log(data)
    })
  }

  editarAlumno(id){
    this.router.navigate(['editar',id])
    console.log(id)
  }
  nuevoAlumno(){
    this.router.navigate(['nuevo']);
    
  }

}
