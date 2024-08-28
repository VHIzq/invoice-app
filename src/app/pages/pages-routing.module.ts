import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { InvoiceFormComponent } from '../components/invoice-form/invoice-form.component';
import { StatusInvoiceComponent } from '../components/status-invoice/status-invoice.component';
import { InvoiceLayoutComponent } from './layouts/invoice-layout/invoice-layout.component';

const routes: Routes = [
  {
    path: '',
    component: InvoiceLayoutComponent,
    children: [
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
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
