import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteDialogItemComponent } from './delete-dialog-item.component';

describe('DeleteDialogItemComponent', () => {
  let component: DeleteDialogItemComponent;
  let fixture: ComponentFixture<DeleteDialogItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteDialogItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteDialogItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
