import { Component, Input, OnInit } from '@angular/core';
import { PaymentActions } from './footer-actions.model';
import { ActivatedRoute } from '@angular/router';

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

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.setupFormActions();
  }

  setupFormActions() {
    const mode = this.activatedRoute.snapshot.data['mode'];
    if (mode === 'new') {
      this.paymentActions ??= { isDiscard: true, isDraft: true, isSend: true };
    } 
    if (mode === 'edit') {
      this.paymentActions ??= { isCancel: true, isChange: true };
    }
  }
}
