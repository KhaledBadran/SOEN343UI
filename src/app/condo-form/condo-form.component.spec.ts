import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CondoFormComponent } from './condo-form.component';

describe('CondoFormComponent', () => {
  let component: CondoFormComponent;
  let fixture: ComponentFixture<CondoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CondoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CondoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
