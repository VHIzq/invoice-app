import { Routes } from '@angular/router';
import { NewInvoiceFormComponent } from './components/new-invoice-form/new-invoice-form.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Invoices',
  },
  {
    path: 'create-invoice',
    component: NewInvoiceFormComponent,
    title: 'Create Invoice',
  },
  {
    path: '**',
    redirectTo: ''
  }
];
