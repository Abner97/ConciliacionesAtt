import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortabilidadOutComponent } from './portabilidad-out.component';

describe('PortabilidadOutComponent', () => {
  let component: PortabilidadOutComponent;
  let fixture: ComponentFixture<PortabilidadOutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortabilidadOutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortabilidadOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
