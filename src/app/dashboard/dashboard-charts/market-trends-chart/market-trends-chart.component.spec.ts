import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketTrendsChartComponent } from './market-trends-chart.component';

describe('MarketTrendsChartComponent', () => {
  let component: MarketTrendsChartComponent;
  let fixture: ComponentFixture<MarketTrendsChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MarketTrendsChartComponent]
    });
    fixture = TestBed.createComponent(MarketTrendsChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
