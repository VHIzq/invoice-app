import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { InvoiceModel } from './invoice.model';
import { RouterModule } from '@angular/router';
import { StatusButtonComponent } from '../../shared/status-button/status-button.component';

@Component({
  selector: 'app-invoice',
  standalone: true,
  imports: [CommonModule, RouterModule, StatusButtonComponent],
  templateUrl: './invoice.component.html',
  styleUrl: './invoice.component.scss',
})
export class InvoiceComponent {
  @Input()
  invoices!: Array<InvoiceModel>;

  invoiceStatus!: string;
}
