import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { InvoiceModel } from '../components/invoice/invoice.model';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  httpClient = inject(HttpClient);

  url_base = 'https://invoice-mock-default-rtdb.firebaseio.com/1.json';

  getMockData() {
    const response = this.httpClient.get<Array<InvoiceModel>>('assets/data.json');
    return response
  }

  getInvoiceData() {
    const response = this.httpClient.get<Array<InvoiceModel>>(this.url_base);
    return response;
  }
}
