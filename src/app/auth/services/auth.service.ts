import { computed, Injectable, signal } from '@angular/core';

import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  sendPasswordResetEmail,
  UserCredential,
} from 'firebase/auth';
import { UserSignUp, UserSignIn } from './auth.service.model';
import { from, map, Observable, of, tap } from 'rxjs';
import { AuthStatus } from './enums/auth-status.enum';
import { HttpHandler, HttpHeaders } from '@angular/common/http';

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
      tap((credential) => {
        this._currentUser.set(user);
        this._authStatus.set(AuthStatus.authenticated);
        sessionStorage.setItem('token', credential.user.refreshToken);
        console.log({ user });
        console.log(credential.user.refreshToken);
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

  /* updateUser(displayName: any) {
    const promise = updateProfile(getAuth().currentUser, { displayName });
    return from(promise);
  } */

  //TODO: add recovery password
  resetPassword(email: string) {
    const promise = sendPasswordResetEmail(getAuth(), email);
    return from(promise);
  }
}
