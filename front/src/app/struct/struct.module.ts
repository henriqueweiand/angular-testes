import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PaginacaoComponent } from './../struct/paginacao/paginacao.component';
import { NavbarComponent } from './../struct/navbar/navbar.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    PaginacaoComponent,
    NavbarComponent,
  ],
  exports: [
    PaginacaoComponent,
    NavbarComponent,
  ]
})
export class StructModule { }
