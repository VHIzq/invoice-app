import { Routes } from '@angular/router';
import { isAuthenticatedGuard } from './auth/guards/is-authenticated.guard';
import { isVerifiedGuard } from './auth/guards/is-verified.guard';

export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'invoices',
    loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule),
    canActivate: [isAuthenticatedGuard, isVerifiedGuard]
  },
  {
    path: '**',
    redirectTo: 'auth'
  }
];
