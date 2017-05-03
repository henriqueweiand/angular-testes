import { Injectable, EventEmitter } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

import { UtilitiesService } from './../shared/utilities.service';

@Injectable()
export class LoginService {

  private _baseUrl: string;
  private _headers: Headers;

  constructor(
    private _utilitiesService: UtilitiesService,
    private _http: Http,
  ) {
    this._baseUrl = 'http://localhost:8080/api/v1/auth';
    this._headers = new Headers();
    this._headers.append('Content-Type', 'application/json');
  }

  public postLogin(formValues: any)
  {
    return this._http.post(this._baseUrl, JSON.stringify(formValues), { headers: this._headers })
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
  
  public fazerLogin(formValues: any) {
    
    this.postLogin(formValues).subscribe((res: any) => {
      this._utilitiesService.setLocalStorage('token', res.token);
    }, (res: Response) => {
      alert('Usuário/Senha Inválidos');
    });

  }

  public checkLogin() {
    let token = this._utilitiesService.getLocalStorage("token", "");

    if(token != undefined && token != '') 
      return true;
    else
      return false;
  }

}
