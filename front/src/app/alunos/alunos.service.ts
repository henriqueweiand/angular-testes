import { Injectable, EventEmitter, Output } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Rx';

import { UtilitiesService } from './../shared/utilities.service';

@Injectable()
export class AlunosService {

  private _baseUrl: string;
  private _headers: Headers;

  constructor(
    private _http: Http,
    private _utilitiesService: UtilitiesService
  ) {
    this._baseUrl = 'http://localhost:8080/api/v1/user';
    this._headers = new Headers();
    this._headers.append('Content-Type', 'application/json');
    this._headers.append('Authorization', 'Bearer ' + this._utilitiesService.getLocalStorage('token', ''));
  }

  public getAlunos(pagina: number) 
  {
      return this._http.get(this._baseUrl+"?page="+pagina, { headers: this._headers })
        .map((res: Response) => res.json())
        .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  public getAluno(id: number) 
  {
      return this._http.get(this._baseUrl+"/"+id, { headers: this._headers })
        .map((res: Response) => res.json())
        .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  public updateAluno(formValues: any)
  {
    return this._http.put(this._baseUrl+"/"+formValues.id, JSON.stringify(formValues), { headers: this._headers })
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  public createAluno(formValues: any)
  {
    return this._http.post(this._baseUrl, JSON.stringify(formValues), { headers: this._headers })
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

}
