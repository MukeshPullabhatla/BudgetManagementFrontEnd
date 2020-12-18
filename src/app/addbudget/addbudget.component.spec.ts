import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddbudgetComponent } from './addbudget.component';

describe('AddbudgetComponent', () => {
  let component: AddbudgetComponent;
  let fixture: ComponentFixture<AddbudgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddbudgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddbudgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
