import { Routes } from '@angular/router';
import { isAuthenticatedGuard } from './auth/guards/is-authenticated.guard';

export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'invoices',
    loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule),
    //canActivate: [isAuthenticatedGuard]
  },
  {
    path: '**',
    redirectTo: 'auth'
  }
];
