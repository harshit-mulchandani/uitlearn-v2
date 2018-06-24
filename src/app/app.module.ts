import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {appRoutes} from './app.routing';
import {ComplibModule} from './complib-module/complib.module';
import {ModalModule} from 'ngx-bootstrap';
import {LaddaModule} from 'angular2-ladda';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ComplibModule,
    ModalModule.forRoot(),
    LaddaModule.forRoot({
      style: 'zoom-in',
      spinnerLines: 12
    }),
    appRoutes,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
