import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { LoginComponent } from './pages/login/login.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { RecoveryPasswordComponent } from './pages/recovery-password/recovery-password.component';
import { SendEmailComponent } from './pages/send-email/send-email.component';

const routes: Routes = [
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,
        title: 'Login'
      },{
        path: 'sign-up',
        component: SignUpComponent,
        title: 'Sign Up'
      },
      {
        path: 'recovery-password',
        component: RecoveryPasswordComponent,
        title: 'Recovery Password',
      },
      {
        path: 'send-email',
        component: SendEmailComponent,
        title: 'Verify your email'
      },
      {
        path: '**', redirectTo: 'login'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
