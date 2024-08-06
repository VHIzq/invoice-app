import { Component, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormService } from '../../services/form.service';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { FooterActionsComponent } from '../../shared/footer-actions/footer-actions.component';
import { ActivatedRoute } from '@angular/router';
import { BackAnchorComponent } from '../../shared/back-anchor/back-anchor.component';

@Component({
  selector: 'app-invoice-form',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [
    ReactiveFormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatButtonModule,
    FooterActionsComponent,
    BackAnchorComponent
  ],
  templateUrl: './invoice-form.component.html',
  styleUrl: './invoice-form.component.scss',
})
export class InvoiceFormComponent implements OnInit {
  titleForm?: string;
  idInvoice: string = 'XM9141';

  formInvoice!: FormGroup;
  constructor(
    private formService: FormService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.setupInitialForm();
    this.setupTitleForm();
  }

  setupInitialForm() {
    this.formInvoice = this.formService.createForm();
  }

  handleSubmit() {
    console.log('submit');
  }

  setupTitleForm() {
    const mode = this.route.snapshot.data['mode'];
    if (mode === 'new') {
      this.titleForm = 'New Invoice';
    }
    if (mode === 'edit') {
      this.titleForm = 'Edit #' + this.idInvoice;
    }
  }
}
