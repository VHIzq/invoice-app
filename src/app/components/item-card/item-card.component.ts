import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-item-card',
  standalone: true,
  imports: [MatInputModule,],
  templateUrl: './item-card.component.html',
  styleUrl: './item-card.component.scss'
})
export class ItemCardComponent {

}
