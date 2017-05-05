import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/RX';

import { AlunosService } from './../alunos.service';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.css']
})
export class AlunoDetalheComponent implements OnInit {

  private _aluno_id: number;
  private _inscricaoRouter: Subscription;
  private _usuario: any;
  private _loading: boolean = true;

  constructor(
    private _route: ActivatedRoute,
    private _alunoService: AlunosService
  ) { 

  }

  ngOnInit() {

    this._inscricaoRouter = this._route.params.subscribe(
      (response: Response) => {
        this._aluno_id = response['id'];
        this._loading  = true;
        
        this._alunoService.getAluno(this._aluno_id).subscribe(
          (usuario: any) => {
            this._usuario = usuario.user;
            this._loading = false;
          }
        );

      }
    );

  }

  ngOnDestroy() {
    this._inscricaoRouter.unsubscribe();
  }

}
