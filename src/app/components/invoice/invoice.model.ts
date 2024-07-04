export interface InvoiceModel {
    invoiceID: string;
    dateToDue: string;
    customer: string;
    statusPayment: 'Paid' | 'Pending' | 'Draft';
    totalPayment?: string;
}