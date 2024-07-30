import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { InvoiceModel } from '../invoice/invoice.model';
import { BackAnchorComponent } from '../../shared/back-anchor/back-anchor.component';
import { StatusBoxComponent } from '../../shared/status-box/status-box.component';
import { FooterActionsComponent } from "../../shared/footer-actions/footer-actions.component";

@Component({
  selector: 'app-status-invoice',
  standalone: true,
  imports: [
    CommonModule,
    BackAnchorComponent,
    StatusBoxComponent,
    CommonModule,
    FooterActionsComponent
],
  templateUrl: './status-invoice.component.html',
  styleUrl: './status-invoice.component.scss',
})
export class StatusInvoiceComponent {
  deleteInvoice() {
    console.log('invoice deleted');
  }
}
