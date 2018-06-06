import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddpresupuestoComponent } from './addpresupuesto.component';

describe('AddpresupuestoComponent', () => {
  let component: AddpresupuestoComponent;
  let fixture: ComponentFixture<AddpresupuestoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddpresupuestoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddpresupuestoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
