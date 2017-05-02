import { CursosService } from './cursos.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/RX';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit, OnDestroy {

  private inscricaoCursos: Subscription;
  private paginaInscricao: Subscription;

  private cursosMarcados: any[] = [];
  private cursos: any[];

  private pagina: number;
  private last_page: number;
  private total: number;

  constructor(
    private _cursosService: CursosService,
    private _router: Router,
    private _route: ActivatedRoute
  ) { 

  }

  ngOnInit() {
    
      this.paginaInscricao = this._route.queryParams.subscribe(
        (queryParams: any) => {
          let pagina: number = queryParams['pagina'];

          if(pagina == undefined)
            pagina = 1;

          this.pagina = pagina;

          this.inscricaoCursos = this._cursosService.getCursos(this.pagina).subscribe(res => {
            this.cursos     = res.curso.data;
            this.last_page  = res.curso.last_page;
            this.total      = res.curso.total;
          });
        }
      );
      
  }

  ngOnDestroy() {
    this.inscricaoCursos.unsubscribe();
    this.paginaInscricao.unsubscribe();
  }

  contador(event, curso) {
    
    if(event.target.checked) {
      this.cursosMarcados.push(curso);
    } else {
      let index: number = this.cursosMarcados.indexOf(curso);

      if (index > -1)
        this.cursosMarcados.splice(index, 1);
    }

  }

  public verificaMarcado(curso) :boolean {
    let encontrou = false;

    if(this.cursosMarcados.length) {
      this.cursosMarcados.forEach((cursoMarcado: any) =>  {
          if(curso.id == cursoMarcado.id) {
            encontrou = true;
            return;
          }
        }
      );

      if(encontrou)
        return true;
    }

    return false;
  }

  alterar() {
    this._router.navigate(['cursos/editar', this.cursosMarcados[0].id]);
  }

  deletar() {
    if (confirm("Deseja realmente deletar os cursos selecionados?")) {
      this.cursosMarcados.forEach(cursoMarcado => {

        this._cursosService.deleteCurso(cursoMarcado.id).subscribe(null, 
          err => {
            alert("Não foi possivel deletar o curso "+cursoMarcado.nome);
          }
        );

      });

      this.cursosMarcados = [];
      this._router.navigate(['cursos']);

    }
  }

}
