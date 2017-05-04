import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private login: any[] = [];
  private _loading: boolean = false;
  private _error: string = '';

  constructor(
    private _loginService: LoginService,
    private _router: Router,
  ) { 
    
  }

  ngOnInit() {
  }

  onSubmit(form, event) {
    event.preventDefault();
    this._loading = true;

    this._loginService.login(form.value)
      .subscribe(
        result => {
          this._router.navigate(['/cursos']);
        }, result => {
          this._error = 'Usuário e/ou senha inválidos.';
          this._loading = false;
        } 
    );

  }

}
