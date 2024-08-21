import { Component, OnInit } from '@angular/core';
import { FormService } from '../../services/form.service';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [ReactiveFormsModule, MatInputModule, MatButtonModule, CommonModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss',
})
export class SignUpComponent implements OnInit {
  formSignUp!: FormGroup;

  constructor(private formService: FormService) {}

  ngOnInit(): void {
    this.setupSignUpForm();
  }

  private setupSignUpForm() {
    this.formSignUp = this.formService.createSignUpForm();
  }
}
