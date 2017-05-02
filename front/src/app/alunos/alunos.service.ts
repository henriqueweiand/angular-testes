import { Injectable, EventEmitter, Output } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class AlunosService {

  private baseUrl: string;
  private _headers: Headers;

  constructor(
    private _http: Http,
  ) {
    this.baseUrl = 'http://localhost:8080/api/v1/user';
    this._headers = new Headers();
    this._headers.append('Content-Type', 'application/json');
  }

  public getAlunos(pagina: number) 
  {
      return this._http.get(this.baseUrl+"?page="+pagina)
        .map((res: Response) => res.json())
        .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

}
