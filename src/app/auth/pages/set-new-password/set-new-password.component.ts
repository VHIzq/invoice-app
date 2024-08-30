import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { FormService } from '../../../services/form.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-set-new-password',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
  ],
  templateUrl: './set-new-password.component.html',
  styleUrl: './set-new-password.component.scss'
})
export class SetNewPasswordComponent implements OnInit {
  private formService = inject(FormService);
  private authService = inject(AuthService);
  
  ngOnInit(): void {
    this.setupSetNewPassword();
  } 

  setNewPasswordForm!: FormGroup;

  handlerResetPassword() {
    console.log('reset password');
  }

  private setupSetNewPassword() {
    this.setNewPasswordForm = this.formService.recoverPasswordForm();
  }
}
