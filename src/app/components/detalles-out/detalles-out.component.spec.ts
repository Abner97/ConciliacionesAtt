import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesOutComponent } from './detalles-out.component';

describe('DetallesOutComponent', () => {
  let component: DetallesOutComponent;
  let fixture: ComponentFixture<DetallesOutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetallesOutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
