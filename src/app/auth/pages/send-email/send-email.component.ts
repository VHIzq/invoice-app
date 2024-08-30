import { Component } from '@angular/core';
import { BackAnchorComponent } from '../../../shared/back-anchor/back-anchor.component';

@Component({
  selector: 'app-send-email',
  standalone: true,
  imports: [
    BackAnchorComponent
  ],
  templateUrl: './send-email.component.html',
  styleUrl: './send-email.component.scss'
})
export class SendEmailComponent {

}
