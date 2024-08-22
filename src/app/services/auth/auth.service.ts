import { Inject, inject, Injectable } from '@angular/core';
import { Auth } from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  firebaseAuth = inject(Auth);


}
