import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FormService } from '../../../services/form.service';
import { Router, RouterModule } from '@angular/router';
import { ErrorMessageFriendlyPipe } from './pipes/error-message-friendly.pipe';
import { UserSignIn } from '../../services/auth.service.model';
import { AuthService } from '../../services/auth.service';
import { BackAnchorComponent } from '../../../shared/back-anchor/back-anchor.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    ErrorMessageFriendlyPipe,
    BackAnchorComponent,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  urlSignup = '/auth/sign-up';
  urlForgotPassword = '/auth/recovery-password';
  urlHome = '/invoices/home';
  formLogin!: FormGroup;
  errorMessage: string | null = null;

  private formService = inject(FormService);
  private authService = inject(AuthService);
  private router = inject(Router);

  ngOnInit(): void {
    this.setupLoginForm();
  }

  handlerLogin() {
    this.login();
    this.resetFormLogin();
  }

  async login() {
    const isValidForm = this.formLogin.valid;
    if (isValidForm) {
      const user = this.formLogin.value as UserSignIn;
      this.authService.signIn(user).subscribe({
        next: () => {
          this.router.navigateByUrl(this.urlHome);
        },
        error: (err) => {
          this.errorMessage = err.code;
        },
      });
    }
  }

  private setupLoginForm() {
    this.formLogin = this.formService.createLoginForm();
  }

  private resetFormLogin() {
    this.formLogin.controls['email'].reset('');
    this.formLogin.controls['password'].reset('');
  }
}
