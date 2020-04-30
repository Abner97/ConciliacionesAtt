import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistogramaDetalleComponent } from './histograma-detalle.component';

describe('HistogramaDetalleComponent', () => {
  let component: HistogramaDetalleComponent;
  let fixture: ComponentFixture<HistogramaDetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistogramaDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistogramaDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
