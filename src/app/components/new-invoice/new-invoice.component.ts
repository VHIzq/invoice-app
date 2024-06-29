import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-new-invoice',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './new-invoice.component.html',
  styleUrl: './new-invoice.component.scss',
})
export class NewInvoiceComponent {}
