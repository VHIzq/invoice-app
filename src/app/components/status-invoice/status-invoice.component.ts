import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { BackAnchorComponent } from '../../shared/back-anchor/back-anchor.component';
import { StatusBoxComponent } from '../../shared/status-box/status-box.component';
import { FooterActionsComponent } from '../../shared/footer-actions/footer-actions.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-status-invoice',
  standalone: true,
  imports: [
    /* Angular Modules */
    CommonModule,
    MatDialogModule,
    /* Custom components */
    BackAnchorComponent,
    StatusBoxComponent,
    FooterActionsComponent,
  ],
  templateUrl: './status-invoice.component.html',
  styleUrl: './status-invoice.component.scss',
})
export class StatusInvoiceComponent {
  constructor(private dialog: MatDialog) {}

  deleteInvoice() {
    console.log('invoice deleted');
  }

  openDialog() {
    const dialogRed = this.dialog.open();
  }
}
