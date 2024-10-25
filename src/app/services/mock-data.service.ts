import { Injectable } from '@angular/core';
import { ChartConfiguration } from 'chart.js';

@Injectable({
  providedIn: 'root'
})
export class MockDataService {

  constructor() { }

  getAssetAllocationData() {
    return {
      labels: ['Stocks', 'Bonds', 'Real Estate', 'Cash'],
      data: [45, 25, 20, 10]
    };
  }

  getMarketTrendData() {
    return {
          options: {
            responsive: false,
          },
          labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
          datasets: [
            { data: [65, 59, 90, 81, 56, 55, 40], label: 'Series A' },
            { data: [28, 48, 40, 19, 96, 27, 100], label: 'Series B' }
          ]
        };
  }


  getPerformanceMetricsData() {
    return {
      labels: ['Q1', 'Q2', 'Q3', 'Q4'],
      datasets: [{
        label: 'Performance',
        data: [75, 80, 85, 90],
        backgroundColor: '#36A2EB',
      }]
    };
  }
}
