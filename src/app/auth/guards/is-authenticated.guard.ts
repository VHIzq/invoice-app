import { inject } from '@angular/core';
import { Router, type CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { AuthStatus } from '../services/enums/auth-status.enum';

export const isAuthenticatedGuard: CanActivateFn = (route, state) => {
  // const url = state.url;
  // localStorage.setItem('url', url);

  const authService = inject(AuthService);
  const router = inject(Router);

  const isAuthenticated = authService.authStatus() === AuthStatus.authenticated;

  if (!isAuthenticated) {
    router.navigateByUrl('/auth/login');
    return false;
  }

  return true;
};
