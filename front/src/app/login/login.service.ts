import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

import 'rxjs/add/operator/map';
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

  login(formValues: any): Observable<boolean> {
    return this._http.post(this._baseUrl, JSON.stringify(formValues), { headers: this._headers })
      .map((response: Response) => {
        let token = response.json() && response.json().token;

        if (token) {
          this._utilitiesService.setLocalStorage('token', token);
          return true;
        } else {
          return false;
        }

    });
  }

}
