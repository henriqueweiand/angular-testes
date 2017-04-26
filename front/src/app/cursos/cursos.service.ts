import { Injectable, EventEmitter, Output } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class CursosService {

  private baseUrl: string;
  private _headers: Headers;

  constructor(
    private _http: Http,
  ) {
    this.baseUrl = 'http://localhost:8080/api/v1/curso';
    this._headers = new Headers();
    this._headers.append('Content-Type', 'application/json');
  }

  public getCursos(pagina: number) 
  {
      return this._http.get(this.baseUrl+"?page="+pagina)
        .map((res: Response) => res.json())
        .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  public getCurso(id: number) 
  {
      return this._http.get(this.baseUrl+'/'+id)
        .map((res: Response) => res.json())
        .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  public deleteCurso(id: number)
  {
    return this._http.delete(this.baseUrl+"/"+id)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  public updateCurso(formValues: any)
  {
    return this._http.put(this.baseUrl+"/"+formValues.id, JSON.stringify(formValues), { headers: this._headers })
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  public createCurso(formValues: any)
  {
    return this._http.post(this.baseUrl, JSON.stringify(formValues), { headers: this._headers })
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

}
