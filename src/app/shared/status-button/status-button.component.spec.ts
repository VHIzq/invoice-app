import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusButtonComponent } from './status-button.component';

describe('StatusButtonComponent', () => {
  let component: StatusButtonComponent;
  let fixture: ComponentFixture<StatusButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatusButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatusButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
