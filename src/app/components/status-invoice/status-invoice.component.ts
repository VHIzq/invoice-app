import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { BackAnchorComponent } from '../../shared/back-anchor/back-anchor.component';
import { StatusBoxComponent } from '../../shared/status-box/status-box.component';
import { FooterActionsComponent } from '../../shared/footer-actions/footer-actions.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';

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
    DeleteDialogComponent
  ],
  templateUrl: './status-invoice.component.html',
  styleUrl: './status-invoice.component.scss',
})
export class StatusInvoiceComponent {
  constructor(private dialog: MatDialog) {}

  deleteInvoice() {
    console.log('invoice deleted');
  }


  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });

    dialogRef.afterClosed().subscribe((confirmDelete) => {
      if (confirmDelete?.reason === 'deleteAction') {
        this.deleteInvoice();
      }
    })
  }
}
