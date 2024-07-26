import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackAnchorComponent } from './back-anchor.component';

describe('BackAnchorComponent', () => {
  let component: BackAnchorComponent;
  let fixture: ComponentFixture<BackAnchorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BackAnchorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BackAnchorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
