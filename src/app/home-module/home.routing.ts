import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeAppComponent} from './home.component';
import {SearchResultsComponent} from './components/search-results/search-results.component';

const homeRouting: Routes = [
  {
    path: '',
    component: HomeAppComponent,
    children: [
      {path: 'results', component: SearchResultsComponent}
    ]
  }
];

export const homeRoutes: ModuleWithProviders = RouterModule.forChild(homeRouting);
