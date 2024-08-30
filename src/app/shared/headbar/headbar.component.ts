import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MenuItem } from './headbar.component.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-headbar',
  standalone: true,
  imports: [MatToolbarModule, MatMenuModule, CommonModule],
  templateUrl: './headbar.component.html',
  styleUrl: './headbar.component.scss',
})
export class HeadbarComponent {
   logoutSession() {
    console.log('logout session');
  }

  goMyProfile() {
    console.log(' go to my settings');
  }
}
