import { Routes } from '@angular/router';
import { NewInvoiceFormComponent } from './components/new-invoice-form/new-invoice-form.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
  {
    path: 'create-invoice',
    component: NewInvoiceFormComponent,
    title: 'Create Invoice',
  },
  /* { path: '**', redirectTo: '/', title: 'Invoices', pathMatch: 'full' }, */
];