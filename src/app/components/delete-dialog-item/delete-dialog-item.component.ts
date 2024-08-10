import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {
  MatDialogActions,
  MatDialogContent,
  MatDialogRef,
} from '@angular/material/dialog';

@Component({
  selector: 'app-delete-dialog-item',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatDialogContent,
    MatDialogActions,
  ],
  templateUrl: './delete-dialog-item.component.html',
  styleUrl: './delete-dialog-item.component.scss',
})
export class DeleteDialogItemComponent {
  dialogRef = inject(MatDialogRef<DeleteDialogItemComponent>);

  onDeleteItem() {
    this.dialogRef.close({ reason: 'deleteAction' });
  }

  onCancel() {
    this.dialogRef.close();
  }
}
