import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FormService } from '../../services/form.service';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { UserModel } from '../../services/auth/auth.service.model';
import { ErrorMessageFriendlyPipe } from './pipes/error-message-friendly.pipe';

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
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  url = 'sign-up';
  formLogin!: FormGroup;
  errorMessage: string | null = null;

  constructor(
    private formService: FormService,
    private authService: AuthService,
    private router: Router
  ) {}

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
      const user = this.formLogin.value as UserModel;
      this.authService.signIn(user).subscribe({
        next: () => {
          this.router.navigateByUrl('home');
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
