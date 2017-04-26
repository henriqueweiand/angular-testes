import { Response } from '@angular/http';
import { Subscription } from 'rxjs/RX';
import { ActivatedRoute, Router } from '@angular/router';
import { CursosService } from './../cursos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-curso-novo',
  templateUrl: './curso-novo.component.html',
  styleUrls: ['./curso-novo.component.css']
})
export class CursoNovoComponent implements OnInit {

  private curso: any[] = [];
  private curso_id: number;
  private inscricaoCursos: Subscription;

  constructor(
    private _cursoService: CursosService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { 
    let id = this._route.snapshot.params['id'];
    id ? this.curso_id = id : this.curso_id = 0;
  }

  ngOnInit() {
    if(this.curso_id)
      this.inscricaoCursos = this._cursoService.getCurso(this.curso_id).subscribe(res => this.curso = res.curso);
  }

  ngOnDestroy() {
    if(this.curso_id)
      this.inscricaoCursos.unsubscribe();
  }

  onSubmit(form, event) {

    event.preventDefault();

    if(form.value.id) {
        // update
        console.log('update');
        
        this._cursoService.updateCurso(form.value).subscribe((res: Response) => {
          alert('Atualizado com sucesso');
          this._router.navigate(['cursos']);
        });
    } else {
        // create
        console.log('create');

        this._cursoService.createCurso(form.value).subscribe((res: Response) => {
          alert('Cadastrado com sucesso');
          this._router.navigate(['cursos']);
        });
    }

  }

}
