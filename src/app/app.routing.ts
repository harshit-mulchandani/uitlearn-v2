import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ImageUploadPopupComponent} from './complib-module/components/image-upload/image-upload-popup.component';

export const appRouting: Routes = [
  {
    path: 'home',
    loadChildren: './home-module/home.module#HomeModule'
  },
  {
    path: 'auth',
    loadChildren: './auth-module/auth.module#AuthModule'
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'image-upload',
    component: ImageUploadPopupComponent,
    outlet: 'popup'
  },
];

export const appRoutes: ModuleWithProviders = RouterModule.forRoot(appRouting);
