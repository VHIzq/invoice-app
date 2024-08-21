import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { InvoiceFormComponent } from './components/invoice-form/invoice-form.component';
import { StatusInvoiceComponent } from './components/status-invoice/status-invoice.component';
import { LoginComponent } from './pages/login/login.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';

export const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    title: 'Login'
  },{
    path: 'sign-up',
    component: SignUpComponent,
    title: 'Sign Up'
  },
  {
    path: 'home',
    component: HomeComponent,
    title: 'Invoices',
  },
  {
    path: 'create-invoice',
    component: InvoiceFormComponent,
    title: 'Create Invoice',
    data: { mode: 'new' }
  },
  {
    path: 'edit-invoice',
    component: InvoiceFormComponent,
    title: 'Edit Invoice',
    data: { mode: 'edit' }
  },
  {
    path: 'status-invoice',
    component: StatusInvoiceComponent,
    title: 'Status Invoice',
    data: { mode: 'status'}
  },
  {
    path: '**',
    redirectTo: ''
  }
];
