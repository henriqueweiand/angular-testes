import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { AlunosRoutingModule } from './alunos.routing.module';

import { AlunosPipe } from './alunos.pipe';
import { StructModule } from './../struct/struct.module';

import { AlunosComponent } from './alunos.component';
import { AlunosService } from './alunos.service';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunoListaComponent } from './aluno-lista/aluno-lista.component';
import { AlunoFormularioComponent } from './aluno-formulario/aluno-formulario.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    StructModule,
    AlunosRoutingModule
  ],
  declarations: [
    AlunosComponent,
    AlunoDetalheComponent,
    AlunoListaComponent,
    AlunosPipe,
    AlunoFormularioComponent
  ],
  providers: [
    AlunosService
  ]
})
export class AlunosModule { }
 