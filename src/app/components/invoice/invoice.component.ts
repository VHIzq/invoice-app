import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { InvoiceService } from '../../services/invoice.service';
import { InvoiceModel } from './invoice.model';

@Component({
  selector: 'app-invoice',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './invoice.component.html',
  styleUrl: './invoice.component.scss',
})
export class InvoiceComponent implements OnInit {
  mockData!: Array<InvoiceModel>;

  constructor(private invoiceService: InvoiceService) {}
  ngOnInit(): void {
    this.setupMockData();
  }

  setupMockData() {
    this.invoiceService
      .getMockData()
      .subscribe((invoices: Array<InvoiceModel>) => {
        this.mockData = invoices;
      });
  }
}
