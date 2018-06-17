import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
];

export const appRoutes: ModuleWithProviders = RouterModule.forRoot(appRouting);
