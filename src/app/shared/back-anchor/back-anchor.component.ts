import { Component, inject, Input, input } from '@angular/core';
import { Router } from '@angular/router';
import { Config } from './back-anchor.model';

@Component({
  selector: 'app-back-anchor',
  standalone: true,
  imports: [],
  templateUrl: './back-anchor.component.html',
  styleUrl: './back-anchor.component.scss',
})
export class BackAnchorComponent {
  @Input()
  config!: Config;

  private router = inject(Router);

  handleNavigation() {
    this.router.navigate([this.config.url]);
  }
}
