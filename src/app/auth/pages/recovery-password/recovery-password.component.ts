import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import {
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { BackAnchorComponent } from '../../../shared/back-anchor/back-anchor.component';
import { FormService } from '../../../services/form.service';
import { AuthService } from '../../services/auth.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-recovery-password',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    BackAnchorComponent,
    RouterModule
  ],
  templateUrl: './recovery-password.component.html',
  styleUrl: './recovery-password.component.scss',
})
export class RecoveryPasswordComponent implements OnInit {
  private formService = inject(FormService);
  private authService = inject(AuthService);
  
  formRecoverPassword!: FormGroup;
  errorMessage: string | null = null;
  url = '/auth/login';
  
  ngOnInit(): void {
    this.setupRecoverPassword();
  }

  handleRecoverPassword() {
    this.recoverPassword();
  }

  async recoverPassword() {
      const email = this.formRecoverPassword.controls['email'].value;
      console.log({email});
      this.authService.resetPassword(email).subscribe({
        next: () => {
          console.log('solved');
        },
        error: (err) =>{
          console.log(err);
        },
      })
  }

  private setupRecoverPassword() {
    this.formRecoverPassword = this.formService.recoverPasswordForm();
  }  
}
