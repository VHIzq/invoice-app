import { faker } from '@faker-js/faker';

import { Component, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormService } from '../../services/form.service';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { FooterActionsComponent } from '../../shared/footer-actions/footer-actions.component';
import { ActivatedRoute, Router } from '@angular/router';
import { BackAnchorComponent } from '../../shared/back-anchor/back-anchor.component';
import { ItemCardComponent } from '../item-card/item-card.component';
import { CommonModule } from '@angular/common';
import { ItemCard } from '../../models/item-card.model';
import { ItemComponent } from '../item/item.component';
import { CacheService } from '../../services/persistency.service';
import { MatDialog } from '@angular/material/dialog';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';

@Component({
  selector: 'app-invoice-form',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatButtonModule,
    FooterActionsComponent,
    BackAnchorComponent,
    ItemCardComponent,
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

  private idInvoice = faker.number.int(2000);

  constructor(
    private formService: FormService,
    private route: ActivatedRoute,
    private cacheService: CacheService,
    private dialog: MatDialog,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.setupInitialForm();
    this.setupTitleForm();
  }

  handleSaveAsDraft() {
    //TODO: if is a pending invoice, must to retrieve data from local storage
    const controlKeys = Object.keys(this.formInvoice.controls);
    controlKeys.forEach((field) => {
      this.cacheService.setItem(field, this.formInvoice.controls[field].value);
    });
  }

  saveAndSend() {
    console.log('put request to API');
  }

  handlerDiscardInvoice() {
    this.openDialog('500ms', '200ms');
  }

  private removeLocalStorageInvoice() {
    const controlKeys = Object.keys(this.formInvoice.controls);
    controlKeys.forEach((key) => {
      this.cacheService.removeItem(key);
    });
  }

  private openDialog(
    enterAnimationDuration: string,
    exitAnimationDuration: string,
  ): void {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });

    dialogRef.afterClosed().subscribe((confirmDelete) => {
      const isDeleteAction = confirmDelete?.reason === 'deleteAction';
      if (isDeleteAction) {
        const urlHome = '/invoices/home';
        this.removeLocalStorageInvoice();
        this.router.navigateByUrl(urlHome);
      }
    })
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
