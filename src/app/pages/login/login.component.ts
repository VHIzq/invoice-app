import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FormService } from '../../services/form.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  formLogin!: FormGroup;

  constructor(private formService: FormService) {}
  ngOnInit(): void {
    this.setupLoginForm();
  }

  handleLogin() {
    console.log('login user');
  }

  private setupLoginForm() {
    this.formLogin = this.formService.createLoginForm();
  }
}
