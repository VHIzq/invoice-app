import { Component, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormService } from '../../services/form.service';
import { MatInputModule } from '@angular/material/input';


@Component({
  selector: 'app-new-invoice-form',
  standalone: true,
  imports: [ReactiveFormsModule, MatInputModule],
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
