import { Component, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormService } from '../../services/form.service';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { FooterActionsComponent } from '../../shared/footer-actions/footer-actions.component';

@Component({
  selector: 'app-new-invoice-form',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [
    ReactiveFormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatButtonModule,
    FooterActionsComponent
  ],
  templateUrl: './new-invoice-form.component.html',
  styleUrl: './new-invoice-form.component.scss',
})
export class NewInvoiceFormComponent implements OnInit {
  formInvoice!: FormGroup;
  constructor(private formService: FormService) {}

  ngOnInit(): void {
    this.setupInitialForm();
  }

  setupInitialForm() {
    this.formInvoice = this.formService.createForm();
  }

  handleSubmit() {
    console.log('submit');
  }
}
