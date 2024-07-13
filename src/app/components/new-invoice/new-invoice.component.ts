import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-invoice',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './new-invoice.component.html',
  styleUrl: './new-invoice.component.scss',
})
export class NewInvoiceComponent {
  constructor(private router: Router) {}
  handleNavigation() {
    this.router.navigate(['create-invoice']);
  }
}
