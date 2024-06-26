import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-headbar',
  standalone: true,
  imports: [MatToolbarModule],
  templateUrl: './headbar.component.html',
  styleUrl: './headbar.component.scss',
})
export class HeadbarComponent {}
