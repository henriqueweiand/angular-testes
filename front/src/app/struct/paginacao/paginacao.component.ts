import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paginacao',
  templateUrl: './paginacao.component.html',
  styleUrls: ['./paginacao.component.css']
})
export class PaginacaoComponent implements OnInit {

  @Input('lastpage') last_page: number; // Qual é a pagina limite
  @Input('tipo') _tipo: string; // Inclui na rota exemplo: alunos, cursos
  @Input('pagina') _pagina: number; // Faz referencia diretamente na view para marcar a pagina atual

  constructor(
    private _router: Router,
  ) { 

  }

  ngOnInit() {
  }

  gerarArray(pagina_limit) {
    let arrayReturn: any[] = [];

    for(let i=1; i<=pagina_limit; i++) {
      arrayReturn.push(i);
    }

    return arrayReturn;
  }

  paginar(pagina: number,) {
    this._router.navigate([this._tipo], {queryParams: {pagina: pagina}});
  }

}
