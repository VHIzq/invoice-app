import { Component } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';


@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  imports: [MatSlideToggleModule],
  templateUrl: './theme-toggle.component.html',
  styleUrl: './theme-toggle.component.scss',
})
export class ThemeToggleComponent {}
