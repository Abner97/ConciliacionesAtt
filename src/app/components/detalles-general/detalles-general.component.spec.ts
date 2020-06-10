import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesGeneralComponent } from './detalles-general.component';

describe('DetallesGeneralComponent', () => {
  let component: DetallesGeneralComponent;
  let fixture: ComponentFixture<DetallesGeneralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetallesGeneralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
