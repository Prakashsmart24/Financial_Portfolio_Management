import { Component, OnInit } from '@angular/core';
import { MockDataService } from 'src/app/services/mock-data.service';

@Component({
  selector: 'app-asset-allocation-chart',
  templateUrl: './asset-allocation-chart.component.html',
  styleUrls: ['./asset-allocation-chart.component.scss']
})
export class AssetAllocationChartComponent implements OnInit{

 
  pieChartLabels: string[] = [];
  pieChartData: number[] = [];
  pieChartOptions: any = {
    responsive: true,
  };
  pieChartType: string = 'pie';
 

  constructor(private mockDataService: MockDataService){

  }


  ngOnInit(): void {
    const assetAllocation = this.mockDataService.getAssetAllocationData();
    this.pieChartLabels = assetAllocation.labels;
    this.pieChartData = assetAllocation.data;
  }
}
