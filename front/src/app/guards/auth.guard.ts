import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route } from '@angular/router';

import { LoginService } from './../login/login.service';

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {

  constructor(
    private _route: Router,
    private _loginService: LoginService
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) : Observable<boolean> | boolean {
    return this.verificarAcesso();
  }

  private verificarAcesso() {
    if(this._loginService.checkLogin()) {
      return true;
    }

    this._route.navigate(['/login']);
    return false;
  }

  canLoad(
    route: Route
  ) : Observable<boolean>|Promise<boolean>|boolean {
    return this.verificarAcesso();
  }

}
