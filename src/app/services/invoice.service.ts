import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { InvoiceModel } from '../components/invoice/invoice.model';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  httpClient = inject(HttpClient);

  getMockData() {
    const response = this.httpClient.get<Array<InvoiceModel>>('assets/data.json');
    return response
  }
}
