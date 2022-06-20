import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { AlumnoRoutingModule } from "./alumnos-routing.module";



@NgModule({
    declarations: [],
    imports: [
      CommonModule, AlumnoRoutingModule, HttpClientModule
    ]
  })
  export class AlumnosModule { }