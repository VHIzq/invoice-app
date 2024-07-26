import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { InvoiceFormComponent } from './components/invoice-form/invoice-form.component';
import { InvoiceComponent } from './components/invoice/invoice.component';

export const routes: Routes = [
  {
    path: '',
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
    path: '**',
    redirectTo: ''
  }
];
