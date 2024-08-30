import { Component, inject } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MenuItem } from './headbar.component.model';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../auth/services/auth.service';
import { Router } from '@angular/router';
import { CacheService } from '../../services/persistency.service';

@Component({
  selector: 'app-headbar',
  standalone: true,
  imports: [MatToolbarModule, MatMenuModule, CommonModule],
  templateUrl: './headbar.component.html',
  styleUrl: './headbar.component.scss',
})
export class HeadbarComponent {
  private authService = inject(AuthService);
  private router = inject(Router);

  signOutSession() {
    this.authService.signOut().subscribe({
      next: () => {
        this.router.navigate(['auth/login']);
      }
    })
  }

  goMyProfile() {
    console.log(' go to my settings');
  }
}
