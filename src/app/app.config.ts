import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient } from '@angular/common/http';
import { provideNativeDateAdapter } from '@angular/material/core';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';

const firebaseConfig = {
  apiKey: "AIzaSyBl7o_11fB3i_3ND6u6_rqcmUve8n-IE_Q",
  authDomain: "invoice-mock.firebaseapp.com",
  databaseURL: "https://invoice-mock-default-rtdb.firebaseio.com",
  projectId: "invoice-mock",
  storageBucket: "invoice-mock.appspot.com",
  messagingSenderId: "198875110568",
  appId: "1:198875110568:web:cea6fa7d16c32ca7b9b69d"
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimations(),
    provideHttpClient(),
    provideNativeDateAdapter(),
    importProvidersFrom([
      //provideFirebaseApp(() => initializeApp(firebaseConfig)),
    ])
  ],
};
