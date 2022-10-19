import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewcircularComponent } from './viewcircular.component';

describe('ViewcircularComponent', () => {
  let component: ViewcircularComponent;
  let fixture: ComponentFixture<ViewcircularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewcircularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewcircularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
