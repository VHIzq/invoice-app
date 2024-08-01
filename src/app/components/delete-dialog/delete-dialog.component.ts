import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {
  MatDialog,
  MatDialogClose,
  MatDialogRef,
  MatDialogTitle,
  MatDialogActions,
  MatDialogContent,
} from '@angular/material/dialog';

@Component({
  selector: 'app-delete-dialog',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatDialogContent,
    MatDialogActions,
  ],
  templateUrl: './delete-dialog.component.html',
  styleUrl: './delete-dialog.component.scss',
})
export class DeleteDialogComponent {
  dialogRef = inject(MatDialogRef<DeleteDialogComponent>);

  onDeleteInvoice() {
    this.dialogRef.close({ reason: 'deleteAction' });
  }
}
