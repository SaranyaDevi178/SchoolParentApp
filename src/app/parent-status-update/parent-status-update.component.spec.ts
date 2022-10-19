import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentStatusUpdateComponent } from './parent-status-update.component';

describe('ParentStatusUpdateComponent', () => {
  let component: ParentStatusUpdateComponent;
  let fixture: ComponentFixture<ParentStatusUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentStatusUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentStatusUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
