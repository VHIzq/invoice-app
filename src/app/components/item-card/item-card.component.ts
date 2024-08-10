import { faker } from '@faker-js/faker';

import { Component, EventEmitter, OnInit } from '@angular/core';
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
export class ItemCardComponent implements OnInit {
  formItem!: FormGroup;

  newItem = new EventEmitter<ItemCard>();

  constructor(private formService: FormService) {}

  addNewItem() {
    const item: ItemCard = {
      itemName: this.formItem.controls['itemName'].value,
      quantity: this.formItem.controls['quantity'].value,
      price: this.formItem.controls['price'].value,
      total: this.formItem.controls['total'].value,
    };

    this.newItem.emit(item);
    console.log({item});
  }

  private setupInitialForm() {
    this.formItem = this.formService.createForm();
    this.setupInitialFakeForm();
  }

  ngOnInit(): void {
    this.setupInitialForm();
  }

  private setupInitialFakeForm() {
    this.formItem.controls['itemName'].setValue(faker.commerce.product());
    this.formItem.controls['quantity'].setValue(faker.number.int(9));
    this.formItem.controls['price'].setValue(faker.commerce.price());
    this.formItem.controls['total'].setValue(faker.commerce.price());
  }
}
