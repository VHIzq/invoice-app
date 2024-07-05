export interface InvoiceModel {
    id:            string;
    createdAt:     string;
    paymentDue:    Date;
    description:   string;
    paymentTerms:  number;
    clientName:    string;
    clientEmail:   string;
    status:        string;
    senderAddress: Address;
    clientAddress: Address;
    items:         Item[];
    total:         number;
}

export interface Address {
    street:   string;
    city:     string;
    postCode: string;
    country:  Country;
}

export interface Country {
    country: string;
}

export interface Item {
    name:     string;
    quantity: number;
    price:    number;
    total:    number;
}
