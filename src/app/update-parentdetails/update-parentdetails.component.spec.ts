import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateParentdetailsComponent } from './update-parentdetails.component';

describe('UpdateParentdetailsComponent', () => {
  let component: UpdateParentdetailsComponent;
  let fixture: ComponentFixture<UpdateParentdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateParentdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateParentdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
