import { AuthGuard } from './guards/auth.guard';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { LoginService } from './login/login.service';
import { UtilitiesService } from './shared/utilities.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './struct/navbar/navbar.component';
import { HomeComponent } from './struct/home/home.component';

@NgModule({
  declarations: [ 
    AppComponent,
    NavbarComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    UtilitiesService,
    AuthGuard,
    LoginService
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
