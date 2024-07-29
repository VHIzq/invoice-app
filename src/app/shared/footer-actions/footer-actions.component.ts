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
      this.paymentActions ??= {
        isDiscard: { isAction: true, label: 'Discard' },
        isDraft: { isAction: true, label: 'Save as Draft' },
        isSend: { isAction: true, label: 'Save & Send' },
      };
    }
    if (mode === 'edit') {
      this.paymentActions ??= {
        isCancel: { isAction: true, label: 'Cancel' },
        isChange: { isAction: true, label: 'Save Changes' },
      };
    }
    if (mode === 'status') {
      this.paymentActions ??= {
        isDraft: { isAction: true, label: 'Edit' },
        isDelete: { isAction: true, label: 'Delete' },
        isSend: { isAction: true, label: 'Mark as Paid' },
      };
    }
  }
}
