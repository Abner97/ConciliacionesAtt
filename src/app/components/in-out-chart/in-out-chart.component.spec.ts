import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InOutChartComponent } from './in-out-chart.component';

describe('InOutChartComponent', () => {
  let component: InOutChartComponent;
  let fixture: ComponentFixture<InOutChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InOutChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InOutChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
