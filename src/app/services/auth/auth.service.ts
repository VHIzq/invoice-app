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
} from 'firebase/auth';
import { UserModel } from './auth.service.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  auth = inject(AngularFireAuth);
  firestore = inject(AngularFirestore);
  router = inject(Router);

  // Suggested code may be subject to a license. Learn more: ~LicenseLog:1135489669.
  getAuth() {
    return getAuth();
  }

  signIn(user: UserModel) {
    return signInWithEmailAndPassword(getAuth(), user.email, user.password);
  }

  signUp(user: UserModel) {
    return createUserWithEmailAndPassword(getAuth(), user.email, user.password);
  }

  // updateUser(displayName: any) {
  //   return updateProfile(getAuth().currentUser, { displayName });
  // }

  resetPassword(email: string) {
    return sendPasswordResetEmail(getAuth(), email)
  }
  
}
