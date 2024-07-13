import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-invoice-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './new-invoice-form.component.html',
  styleUrl: './new-invoice-form.component.scss'
})
export class NewInvoiceFormComponent {

}
