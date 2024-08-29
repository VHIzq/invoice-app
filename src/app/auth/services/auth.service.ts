import { inject, Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  sendPasswordResetEmail,
  UserCredential,
} from 'firebase/auth';
import { UserAuth } from './auth.service.model';
import { from, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  auth = inject(AngularFireAuth);
  firestore = inject(AngularFirestore);
  router = inject(Router);

  getAuth() {
    return getAuth();
  }

  signIn(user: UserAuth): Observable<UserCredential> {
    const promise = signInWithEmailAndPassword(
      getAuth(),
      user.email,
      user.password
    );
    return from(promise).pipe(
      tap((crendential) => {
        localStorage.setItem('token', crendential.user.refreshToken);
        console.log(crendential.user.refreshToken);
      })
    );
  }

  signUp(user: UserAuth): Observable<UserCredential> {
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

  resetPassword(email: string) {
    const promise = sendPasswordResetEmail(getAuth(), email);
    return from(promise);
  }
}
