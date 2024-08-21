import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(private fb: FormBuilder) { }

  createForm(): FormGroup {
    return this.fb.group({
      cityFrom: ['', Validators.required],
      streetAddressFrom :['', Validators.required],
      postCodeFrom :['', Validators.required],
      countryFrom: ['', Validators.required],
      clientNameTo: ['', Validators.required],
      clientEmailTo: ['', Validators.required],
      streetAddressTo: ['', Validators.required],
      cityTo: ['', Validators.required],
      postCodeTo :['', Validators.required],
      countryTo: ['', Validators.required],
      invoiceDate: ['', Validators.required],
      paymentTerms: ['', Validators.required],
      projectDescription: ['', Validators.required],
      itemName: ['', Validators.required],
      quantity: ['', Validators.required],
      price: ['', Validators.required],
      total: ['', Validators.required],
      itemId: ['', Validators.required],
    })
  }

  createLoginForm() {
    return this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(20)]]
    });
  }
}
