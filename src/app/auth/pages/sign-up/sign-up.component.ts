import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormService } from '../../../services/form.service';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ErrorMessageFriendlyPipe } from '../login/pipes/error-message-friendly.pipe';
import { AuthService } from '../../services/auth.service';
import { UserSignUp } from '../../services/auth.service.model';
import { BackAnchorComponent } from '../../../shared/back-anchor/back-anchor.component';

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
    BackAnchorComponent
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

  resetForm() {
    this.formSignUp.controls['password'].reset('');
    this.formSignUp.controls['confirmPassword'].reset('');
  }
  
  private signUp() {
    const user = this.formSignUp.value as UserSignUp;
    this.authService.signUp(user)
    .subscribe({
      next: () => {
        this.router.navigateByUrl('/auth/verify-email');
      },
      error: (err) => {
        this.errorMessage = err.code;
        this.resetForm();
      },
    });
    
  }

  private setupSignUpForm() {
    this.formSignUp = this.formService.createSignUpForm();
  }
}