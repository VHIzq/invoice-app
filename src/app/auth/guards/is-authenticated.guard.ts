import { inject } from '@angular/core';
import { Router, type CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { AuthStatus } from '../services/enums/auth-status.enum';

export const isAuthenticatedGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  const isAuthenticatedOnStatus = authService.authStatus() === AuthStatus.authenticated;
  const isAuthenticatedOnCache =  sessionStorage.getItem('Authenticated') === 'authenticated';

  if (isAuthenticatedOnCache || isAuthenticatedOnStatus ) {
    return true;
  } else {
    router.navigateByUrl('/auth/login');
    return false;
  }
};
