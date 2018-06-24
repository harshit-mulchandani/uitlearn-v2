import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {HomeAppComponent} from './home.component';
import {homeRoutes} from './home.routing';
import {SearchResultsComponent} from './components/search-results/search-results.component';
import {ComplibModule} from '../complib-module/complib.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ComplibModule,
    homeRoutes
  ],
  exports: [HomeAppComponent],
  declarations: [
    HomeAppComponent,
    SearchResultsComponent
  ],
  providers: [],
})
export class HomeModule {
}
