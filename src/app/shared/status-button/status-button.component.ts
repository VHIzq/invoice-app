import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { InvoiceModel } from '../../components/invoice/invoice.model';

@Component({
  selector: 'app-status-button',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './status-button.component.html',
  styleUrl: './status-button.component.scss',
})
export class StatusButtonComponent {
  @Input()
  invoice!: InvoiceModel;

  private router = inject(Router);

  handleNavigation(){
    this.router.navigate(['invoices/status-invoice']);
  }
}
