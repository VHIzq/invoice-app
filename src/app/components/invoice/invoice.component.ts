import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { InvoiceModel } from './invoice.model';

@Component({
  selector: 'app-invoice',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './invoice.component.html',
  styleUrl: './invoice.component.scss',
})
export class InvoiceComponent {
  @Input()
  invoices!: Array<InvoiceModel>;
  invoiceStatus!: string;
}
