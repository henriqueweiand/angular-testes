import { AlunosService } from './../alunos.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/RX';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-aluno-lista',
  templateUrl: './aluno-lista.component.html',
  styleUrls: ['./aluno-lista.component.css']
})
export class AlunoListaComponent implements OnInit {

  private _alunoInscricao: Subscription;

  private _alunos: any[];
  private _last_page: number;
  private _total: number;
  private _pagina: number;
  private _selecionado: number = 0;
  private _filtro: string;

  constructor(
    private _alunoService: AlunosService,
    private _route: ActivatedRoute
  ) { 

  }

  ngOnInit() { 

    this._alunoInscricao = this._route.queryParams.subscribe(
        (queryParams: any) => {
          let pagina: number = queryParams['pagina'];

          if(pagina == undefined)
            pagina = 1;

          this._pagina = pagina;

          this._alunoInscricao = this._alunoService.getAlunos(this._pagina).subscribe(res => {
            this._alunos     = res.users.data;
            this._last_page  = res.users.last_page;
            this._total      = res.users.total;
          });
        }
    );
  }

  ngOnDestroy() {
    this._alunoInscricao.unsubscribe();
  }

  marcar(aluno_marcado: number) {
    this._selecionado = aluno_marcado;
  }

}
