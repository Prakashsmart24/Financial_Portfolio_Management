import { Component, OnInit } from '@angular/core';
import { ChartConfiguration } from 'chart.js';
import { MockDataService } from 'src/app/services/mock-data.service';

@Component({
  selector: 'app-market-trends-chart',
  templateUrl: './market-trends-chart.component.html',
  styleUrls: ['./market-trends-chart.component.scss']
})
export class MarketTrendsChartComponent implements OnInit{

  radarChartOptions: ChartConfiguration<'radar'>['options'];
  radarChartLabels: string[] = [];
  radarChartDatasets: ChartConfiguration<'radar'>['data']['datasets'] | undefined;

 

  constructor( private mockDataService : MockDataService){



  }

  ngOnInit(): void {
    const chartData  = this.mockDataService.getMarketTrendData();
    this.radarChartOptions = {
      responsive: true, 
      maintainAspectRatio: false, 
    };
    this.radarChartOptions = chartData.options;
    this.radarChartLabels = chartData.labels;
    this.radarChartDatasets = chartData.datasets;
  }

}
