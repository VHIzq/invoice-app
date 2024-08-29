import { Component } from '@angular/core';
import { FilterComponent } from '../filter/filter.component';
import { NewInvoiceComponent } from '../new-invoice/new-invoice.component';
import { NoInvoicesComponent } from '../no-invoices/no-invoices.component';
import { InvoiceComponent } from '../invoice/invoice.component';
import { InvoiceModel } from '../invoice/invoice.model';
import { InvoiceService } from '../../services/invoice.service';
import { SidenavComponent } from '../../shared/sidenav/sidenav.component';
import { HeadbarComponent } from '../../shared/headbar/headbar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    FilterComponent,
    NewInvoiceComponent,
    NoInvoicesComponent,
    InvoiceComponent,
    SidenavComponent,
    HeadbarComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  mockData!: Array<InvoiceModel>;

  constructor(private invoiceService: InvoiceService) {}
  ngOnInit(): void {
    this.setupMockData();
    this.setupInitialInvoices();
  }

  setupMockData() {
    this.invoiceService
      .getMockData()
      .subscribe((invoices: Array<InvoiceModel>) => {
        this.mockData = invoices;
      });
  }

  setupInitialInvoices() {
    this.invoiceService.getInvoiceData()
    .subscribe();
    console.log('to subscription');
  }
}
