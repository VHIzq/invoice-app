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
import { ItemCardComponent } from '../item-card/item-card.component';
import { CommonModule } from '@angular/common';
import { ItemCard } from '../../models/item-card.model';
import { ItemComponent } from '../item/item.component';
import { PersistencyService } from '../../services/persistency.service';

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
    ItemCardComponent,
    CommonModule,
    ItemComponent,
  ],
  templateUrl: './invoice-form.component.html',
  styleUrl: './invoice-form.component.scss',
})
export class InvoiceFormComponent implements OnInit {
  titleForm?: string;
  formInvoice!: FormGroup;
  itemAdded!: ItemCard;
  onEditingItem?: ItemCard;

  itemList: Array<ItemCard> = [
    {
      itemName: 'Paper',
      quantity: '2',
      price: '124',
      total: '234',
    },
  ];

  private idInvoice = faker.number.int(2000);

  constructor(
    private formService: FormService,
    private route: ActivatedRoute,
    private persistencyService: PersistencyService
  ) {}

  ngOnInit(): void {
    this.setupInitialForm();
    this.setupTitleForm();
  }

  handleSubmit() {
    console.log('submit');
  }

  handleSaveAsDraft() {
    const controlKeys = Object.keys(this.formInvoice.controls);
    controlKeys.forEach((field) => {
      this.persistencyService.setItem(field, this.formInvoice.controls[field].value);
    });
  }

  private setupInitialForm() {
    this.formInvoice = this.formService.createForm();
    this.setupInitialFakeForm();
  }

  private setupTitleForm() {
    const mode = this.route.snapshot.data['mode'];
    if (mode === 'new') {
      this.titleForm = 'New Invoice';
    }
    if (mode === 'edit') {
      this.titleForm = 'Edit #' + this.idInvoice;
    }
  }

  private setupInitialFakeForm() {
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
    this.formInvoice.controls['clientEmailTo'].setValue(
      faker.internet.email(),
      [faker.person.firstName, faker.person.lastName]
    );
    this.formInvoice.controls['streetAddressTo'].setValue(
      faker.location.street()
    );
    this.formInvoice.controls['cityTo'].setValue(faker.location.city());
    this.formInvoice.controls['postCodeTo'].setValue(faker.location.zipCode());
    this.formInvoice.controls['countryTo'].setValue(faker.location.country());
    this.formInvoice.controls['invoiceDate'].setValue(faker.date.recent());
    this.formInvoice.controls['paymentTerms'].setValue(faker.lorem.paragraph());
    this.formInvoice.controls['projectDescription'].setValue(
      faker.lorem.sentence()
    );
  }
}
