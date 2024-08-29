import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'app-invoice-layout',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './invoice-layout.component.html',
  styleUrl: './invoice-layout.component.scss'
})
export class InvoiceLayoutComponent {
  private authService = inject(AuthService);

  get user() {
    const user = this.authService.getAuth();
    console.log('here');
    console.log({user});
    return user;
  }
}
