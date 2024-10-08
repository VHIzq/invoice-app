import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterActionsComponent } from './footer-actions.component';

describe('FooterActionsComponent', () => {
  let component: FooterActionsComponent;
  let fixture: ComponentFixture<FooterActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterActionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
