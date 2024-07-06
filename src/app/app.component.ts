import { Component, OnInit, Signal, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidenavComponent } from './shared/sidenav/sidenav.component';
import { CommonModule } from '@angular/common';
import { HeadbarComponent } from './shared/headbar/headbar.component';
import { FilterComponent } from './components/filter/filter.component';
import { NewInvoiceComponent } from './components/new-invoice/new-invoice.component';
import { NoInvoicesComponent } from './components/no-invoices/no-invoices.component';
import { InvoiceComponent } from './components/invoice/invoice.component';
import { InvoiceService } from './services/invoice.service';
import { InvoiceModel } from './components/invoice/invoice.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    SidenavComponent,
    HeadbarComponent,
    FilterComponent,
    NewInvoiceComponent,
    NoInvoicesComponent,
    InvoiceComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'invoice-app';
  totalInvoices = 7;
  mockData!: Array<InvoiceModel>;

  constructor(private invoiceService: InvoiceService) {}
  ngOnInit(): void {
    this.setupMockData();
  }


  setupMockData() {
    this.invoiceService.getMockData().subscribe((invoices: any) => {
      this.mockData = invoices;
    });
  }

}
