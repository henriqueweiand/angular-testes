import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route } from '@angular/router';

import { UtilitiesService } from './../shared/utilities.service';

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {

  constructor(
    private _route: Router,
    private _utilitiesService: UtilitiesService
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) : Observable<boolean> | boolean {
    return this.verificarAcesso();
  }

  canLoad(
    route: Route
  ) : Observable<boolean>|Promise<boolean>|boolean {
    return this.verificarAcesso();
  }

  private verificarAcesso() {
    if(this._utilitiesService.checkLogin())
      return true;

    this._route.navigate(['/login']);
    return false;
  }

}
