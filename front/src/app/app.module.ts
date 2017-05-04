import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AuthGuard } from './guards/auth.guard';
import { UtilitiesService } from './shared/utilities.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [ 
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    UtilitiesService,
    AuthGuard,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
