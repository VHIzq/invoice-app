import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FormService } from '../../services/form.service';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

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

  constructor(private formService: FormService, firebaseService: AuthService) {}
  ngOnInit(): void {
    this.setupLoginForm();
  }

  handleLogin() {
    console.log('login user');
  }

  async login() {
    console.log(this.formLogin.value);
    return;
    if (this.formLogin.valid) {
      
    }
  }

  private setupLoginForm() {
    this.formLogin = this.formService.createLoginForm();
  }
}
