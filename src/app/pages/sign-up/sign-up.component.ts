import { Component, OnInit } from '@angular/core';
import { FormService } from '../../services/form.service';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { AuthService } from '../../services/auth/auth.service';
import { UserModel } from '../../services/auth/auth.service.model';
import { Router } from '@angular/router';
import { ErrorMessageFriendlyPipe } from '../login/pipes/error-message-friendly.pipe';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    ErrorMessageFriendlyPipe,
  ],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss',
})
export class SignUpComponent implements OnInit {
  formSignUp!: FormGroup;
  errorMessage: string | null = null;

  constructor(
    private formService: FormService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.setupSignUpForm();
  }

  handlerSignUp() {
    this.signUp();
  }
  
  signUp() {
    const user = this.formSignUp.value as UserModel;
    this.authService.signUp(user)
    .subscribe({
      next: () => {
        this.router.navigateByUrl('home');
      },
      error: (err) => {
        this.errorMessage = err.code;
      },
    });
    
  }

  private setupSignUpForm() {
    this.formSignUp = this.formService.createSignUpForm();
  }
}

//TODO: double check passwords matches
/* https://blog.bitsrc.io/implementing-confirm-password-validation-in-angular-with-custom-validators-6acd01cb0288 */
