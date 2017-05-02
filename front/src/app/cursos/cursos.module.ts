import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosService } from './cursos.service';

import { StructModule } from './../struct/struct.module';

import { CursosRoutingModule } from './cursos.routing.module';
import { CursosComponent } from './cursos.component';
import { CursoNovoComponent } from './curso-novo/curso-novo.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    StructModule,
    CursosRoutingModule
  ],
  declarations: [
    CursosComponent,
    CursoNovoComponent, 
    CursoDetalheComponent,
  ],
  providers: [
    CursosService
  ]
})
export class CursosModule { }
