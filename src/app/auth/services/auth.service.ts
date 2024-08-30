import { computed, Injectable, signal } from '@angular/core';

import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  sendPasswordResetEmail,
  UserCredential,
  signOut,
} from 'firebase/auth';
import { UserSignUp, UserSignIn } from './auth.service.model';
import { from, Observable, tap } from 'rxjs';
import { AuthStatus } from './enums/auth-status.enum';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _currentUser = signal<UserSignUp | null>(null);
  private _authStatus = signal<AuthStatus>(AuthStatus.checking);

  //? Exposed interface
  public currentUser = computed(() => this._currentUser());
  public authStatus = computed(() => this._authStatus());
  //? Exposed interface

  getAuth() {
    return getAuth();
  }

  signIn(user: UserSignIn): Observable<UserCredential> {
    const promise = signInWithEmailAndPassword(
      getAuth(),
      user.email,
      user.password
    );
    return from(promise).pipe(
      tap(() => {
        this._currentUser.set(user);
        this._authStatus.set(AuthStatus.authenticated);
        sessionStorage.setItem('Authenticated', AuthStatus.authenticated);
      })
    );
  }

  signUp(user: UserSignUp): Observable<UserCredential> {
    const promise = createUserWithEmailAndPassword(
      getAuth(),
      user.email,
      user.password
    );
    return from(promise);
  }

  signOut() {
    const promise = signOut(getAuth());
    return from(promise).pipe(
      tap(() => {
        this._authStatus.set(AuthStatus.notAuthenticated);
        sessionStorage.setItem('Authenticated', AuthStatus.notAuthenticated);
        sessionStorage.removeItem('token');
      })
    );
  }

  /* updateUser(displayName: any) {
    const promise = updateProfile(getAuth().currentUser, { displayName });
    return from(promise);
  } */

  resetPassword(email: string) {
    const promise = sendPasswordResetEmail(getAuth(), email);
    return from(promise);
  }
}
