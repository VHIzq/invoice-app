import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FormService } from '../../services/form.service';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { UserModel } from '../../services/auth/auth.service.model';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  url = 'sign-up';
  formLogin!: FormGroup;

  constructor(
    private formService: FormService,
    private authService: AuthService
  ) {}
  ngOnInit(): void {
    this.setupLoginForm();
  }

  handlerLogin() {
    console.log('login user');
    this.login()
    this.resetFormLogin();
  }

   async login() {
    if (this.formLogin.valid) {
      const user = this.formLogin.value as UserModel;
      this.authService.signIn(user)
      .then((resp) => console.log('__', resp))
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
