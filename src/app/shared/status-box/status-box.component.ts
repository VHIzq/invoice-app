import { Component } from '@angular/core';
import { InvoiceModel } from '../../components/invoice/invoice.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-status-box',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './status-box.component.html',
  styleUrl: './status-box.component.scss'
})
export class StatusBoxComponent {
  invoice!: InvoiceModel;


}
