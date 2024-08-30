import { faker } from '@faker-js/faker';

import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormService } from '../../services/form.service';
import { ItemCard } from '../../models/item-card.model';

@Component({
  selector: 'app-item-card',
  standalone: true,
  imports: [MatInputModule, ReactiveFormsModule],
  templateUrl: './item-card.component.html',
  styleUrl: './item-card.component.scss',
})
export class ItemCardComponent implements OnInit, OnChanges {
  formItem!: FormGroup;

  @Input()
  onEditingItem?: ItemCard;

  @Output()
  newItem = new EventEmitter<ItemCard>();

  constructor(private formService: FormService) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.onEditingForm();
  }

  handlerAddNewItem() {
    const item: ItemCard = {
      itemId: this.formItem.controls['itemId'].value,
      itemName: this.formItem.controls['itemName'].value,
      quantity: this.formItem.controls['quantity'].value,
      price: this.formItem.controls['price'].value,
      total: this.formItem.controls['total'].value,
    };

    this.newItem.emit(item);
    console.log({ item });
    this.setupInitialFakeForm();
  }

  private setupInitialForm() {
    this.formItem = this.formService.createForm();
    this.setupInitialFakeForm();
  }

  ngOnInit(): void {
    this.setupInitialForm();
  }

  private onEditingForm() {
    if (this.onEditingItem) {
      this.setupOnEditingForm();
    }
  }

  private setupInitialFakeForm() {
    this.formItem.controls['itemId'].setValue(faker.number.int(200));
    this.formItem.controls['itemName'].setValue(faker.commerce.product());
    this.formItem.controls['quantity'].setValue(faker.number.int(9));
    this.formItem.controls['price'].setValue(faker.commerce.price());
    this.formItem.controls['total'].setValue(faker.commerce.price());
  }

  private setupOnEditingForm() {
    this.formItem.controls['itemId'].setValue(this.onEditingItem?.itemId);
    this.formItem.controls['itemName'].setValue(this.onEditingItem?.itemName);
    this.formItem.controls['quantity'].setValue(this.onEditingItem?.quantity);
    this.formItem.controls['price'].setValue(this.onEditingItem?.price);
    this.formItem.controls['total'].setValue(this.onEditingItem?.total);
  }
}
