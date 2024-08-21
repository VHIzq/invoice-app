import { Component, OnInit } from '@angular/core';
import { FormService } from '../../services/form.service';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule
  ],
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


/* https://blog.bitsrc.io/implementing-confirm-password-validation-in-angular-with-custom-validators-6acd01cb0288 */