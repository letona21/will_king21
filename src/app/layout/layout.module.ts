import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { NuevoComponent } from './alumno-component/nuevo/nuevo.component';
import { EditarComponent } from './alumno-component/editar/editar.component';

import { AlumnosComponent } from './alumno-component/alumnos/alumnos.component';

@NgModule({
    imports: [CommonModule, LayoutRoutingModule, TranslateModule, NgbDropdownModule],
    declarations: [LayoutComponent, SidebarComponent, HeaderComponent, NuevoComponent, EditarComponent,  AlumnosComponent]
})
export class LayoutModule {}
