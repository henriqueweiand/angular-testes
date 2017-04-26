import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursoNovoComponent } from './curso-novo/curso-novo.component';
import { CursosComponent } from './cursos.component';

const cursosRoutes: Routes = [
    {path: '', component: CursosComponent},
    {path: 'novo', component: CursoNovoComponent},
    {path: 'editar/:id', component: CursoNovoComponent},
    {path: ':id', component: CursoDetalheComponent},
];

@NgModule({
    imports: [RouterModule.forChild(cursosRoutes)],
    exports: [RouterModule]
})
export class CursosRoutingModule {}