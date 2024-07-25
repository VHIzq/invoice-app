import { Component, Input, OnInit } from '@angular/core';
import { PaymentActions } from './footer-actions.model';

@Component({
  selector: 'app-footer-actions',
  standalone: true,
  imports: [],
  templateUrl: './footer-actions.component.html',
  styleUrl: './footer-actions.component.scss',
})
export class FooterActionsComponent implements OnInit {
  @Input()
  paymentActions?: PaymentActions;

  ngOnInit(): void {
    this.setupInitialActions();
  }

  setupInitialActions() {
    this.paymentActions ??= { isDiscard: true, isDraft: true, isSend: true };
  }
}
