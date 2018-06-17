import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AuthComponent} from './auth.component';
import {authRoutes} from './auth.routing';


@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, authRoutes],
  exports: [AuthComponent],
  declarations: [
    AuthComponent
  ],
  providers: [],
})
export class AuthModule {
}
