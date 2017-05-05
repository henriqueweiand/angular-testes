import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/RX';

import { ActivatedRoute, Router } from '@angular/router';
import { AlunosService } from './../alunos.service';

@Component({
  selector: 'app-aluno-formulario',
  templateUrl: './aluno-formulario.component.html',
  styleUrls: ['./aluno-formulario.component.css']
})
export class AlunoFormularioComponent implements OnInit {

  private _aluno_id: number;
  private _inscricaoRouter: Subscription;
  private _usuario: any;
  private _loading: boolean = true;

  constructor(
    private _route: ActivatedRoute,
    private _alunoService: AlunosService,
    private _router: Router
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

  onSubmit(form, event) {

    event.preventDefault();

    if(form.value.id) {
        // update
        console.log('update');
        
        this._alunoService.updateAluno(form.value).subscribe((res: Response) => {
          alert('Atualizado com sucesso');
          this._router.navigate(['/alunos']);
        });
    } else {
        // create
        console.log('create');

        this._alunoService.createAluno(form.value).subscribe((res: Response) => {
          alert('Cadastrado com sucesso');
          this._router.navigate(['/alunos']);
        });
    }

  }

}


