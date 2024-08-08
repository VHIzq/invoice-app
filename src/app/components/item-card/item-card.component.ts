import { faker } from '@faker-js/faker';

import { Component, OnInit } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormService } from '../../services/form.service';

@Component({
  selector: 'app-item-card',
  standalone: true,
  imports: [MatInputModule, ReactiveFormsModule],
  templateUrl: './item-card.component.html',
  styleUrl: './item-card.component.scss',
})
export class ItemCardComponent implements OnInit {
  formItem!: FormGroup;

  constructor(
    private formService: FormService,
  ) {}

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
