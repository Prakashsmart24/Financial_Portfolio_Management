import { Component, OnInit } from '@angular/core';
import { MockDataService } from 'src/app/services/mock-data.service';

@Component({
  selector: 'app-performance-metrics-chart',
  templateUrl: './performance-metrics-chart.component.html',
  styleUrls: ['./performance-metrics-chart.component.scss']
})
export class PerformanceMetricsChartComponent implements OnInit {

  public barChartData: any;

  constructor( private mockDataService : MockDataService){

  }


  ngOnInit(): void {
   this.barChartData =  this.mockDataService.getPerformanceMetricsData();
  }

}
