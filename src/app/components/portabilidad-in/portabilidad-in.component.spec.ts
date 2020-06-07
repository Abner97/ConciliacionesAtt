import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortabilidadInComponent } from './portabilidad-in.component';

describe('PortabilidadInComponent', () => {
  let component: PortabilidadInComponent;
  let fixture: ComponentFixture<PortabilidadInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortabilidadInComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortabilidadInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
