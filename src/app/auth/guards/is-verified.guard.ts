import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const isVerifiedGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const isVerifiedOnStatus = authService.authVerified() === 'verified';
  const isVerifiedOnCache = sessionStorage.getItem('verified') === 'verified';
  if (isVerifiedOnStatus || isVerifiedOnCache) {
    return true;
  } else {
    return false;
  }
}