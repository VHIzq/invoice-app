import { faker } from '@faker-js/faker';

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
    BackAnchorComponent,
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
    this.setupInitialFakeForm();
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

  setupInitialFakeForm() {
    this.formInvoice?.controls['cityFrom'].setValue(faker.location.city());
    this.formInvoice.controls['streetAddressFrom'].setValue(
      faker.location.street()
    );
    this.formInvoice.controls['postCodeFrom'].setValue(
      faker.location.zipCode()
    );
    this.formInvoice.controls['countryFrom'].setValue(faker.location.country());
    this.formInvoice.controls['clientNameTo'].setValue(
      faker.person.firstName()
    );
    this.formInvoice.controls['clientEmailTo'].setValue(faker.internet.email(), [
      faker.person.firstName,
      faker.person.lastName,
    ]);
    this.formInvoice.controls['streetAddressTo'].setValue(
      faker.location.street()
    );
    this.formInvoice.controls['cityTo'].setValue(faker.location.city());
    this.formInvoice.controls['postCodeTo'].setValue(faker.location.zipCode());
    this.formInvoice.controls['countryTo'].setValue(faker.location.country());
    this.formInvoice.controls['invoiceDate'].setValue(faker.date.weekday());
    this.formInvoice.controls['paymentTerms'].setValue(true);
    this.formInvoice.controls['projectDescription'].setValue(
      faker.lorem.sentence()
    );
    this.formInvoice.controls['itemName'].setValue(faker.commerce.product());
    this.formInvoice.controls['quantity'].setValue(faker.number.int(9));
    this.formInvoice.controls['price'].setValue(faker.commerce.price());
    this.formInvoice.controls['total'].setValue(faker.commerce.price());
  }
}
