import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UtilitiesService } from './../../shared/utilities.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private _utilitiesService: UtilitiesService,
    private _router: Router,
  ) { }

  ngOnInit() {
  }

  sair() {
    this._utilitiesService.removeLocalStorage('token');
    this._router.navigate(['/login']);
  }

}
