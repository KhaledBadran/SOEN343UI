import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CondoDetailsComponent } from './condo-details.component';

describe('CondoDetailsComponent', () => {
  let component: CondoDetailsComponent;
  let fixture: ComponentFixture<CondoDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CondoDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CondoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
