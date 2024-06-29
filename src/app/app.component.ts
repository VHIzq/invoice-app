import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidenavComponent } from './shared/sidenav/sidenav.component';
import { CommonModule } from '@angular/common';
import { HeadbarComponent } from './shared/headbar/headbar.component';
import { FilterComponent } from './components/filter/filter.component';
import { NewInvoiceComponent } from './components/new-invoice/new-invoice.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet, 
    SidenavComponent,
    HeadbarComponent,
    FilterComponent,
    NewInvoiceComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'invoice-app';
}
