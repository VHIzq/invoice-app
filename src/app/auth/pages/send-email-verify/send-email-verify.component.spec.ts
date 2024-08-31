import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendEmailVerifyComponent } from './send-email-verify.component';

describe('SendEmailVerifyComponent', () => {
  let component: SendEmailVerifyComponent;
  let fixture: ComponentFixture<SendEmailVerifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SendEmailVerifyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SendEmailVerifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
