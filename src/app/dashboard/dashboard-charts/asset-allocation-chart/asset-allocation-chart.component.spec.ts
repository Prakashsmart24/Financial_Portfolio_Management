import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetAllocationChartComponent } from './asset-allocation-chart.component';

describe('AssetAllocationChartComponent', () => {
  let component: AssetAllocationChartComponent;
  let fixture: ComponentFixture<AssetAllocationChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssetAllocationChartComponent]
    });
    fixture = TestBed.createComponent(AssetAllocationChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
