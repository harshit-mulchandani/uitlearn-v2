import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthComponent} from './auth.component';


const authRouting: Routes = [
  {
    path: '',
    component: AuthComponent
  }
];

export const authRoutes: ModuleWithProviders = RouterModule.forChild(authRouting);
