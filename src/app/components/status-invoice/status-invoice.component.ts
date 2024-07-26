import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { InvoiceModel } from '../invoice/invoice.model';
import { BackAnchorComponent } from '../../shared/back-anchor/back-anchor.component';

@Component({
  selector: 'app-status-invoice',
  standalone: true,
  imports: [CommonModule, BackAnchorComponent],
  templateUrl: './status-invoice.component.html',
  styleUrl: './status-invoice.component.scss'
})
export class StatusInvoiceComponent {
  invoice!: InvoiceModel;
}
