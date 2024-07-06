import { CommonModule } from '@angular/common';
import { Component, computed, Input, input, Signal } from '@angular/core';
import { InvoiceService } from '../../services/invoice.service';
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
