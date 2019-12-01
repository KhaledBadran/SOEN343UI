import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CondoEditComponent } from './condo-edit.component';

describe('CondoEditComponent', () => {
  let component: CondoEditComponent;
  let fixture: ComponentFixture<CondoEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CondoEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CondoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
