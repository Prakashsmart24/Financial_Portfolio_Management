import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardChartsComponent } from './dashboard/dashboard-charts/dashboard-charts.component';
import { AssetAllocationChartComponent } from './dashboard/dashboard-charts/asset-allocation-chart/asset-allocation-chart.component';
import { MarketTrendsChartComponent } from './dashboard/dashboard-charts/market-trends-chart/market-trends-chart.component';
import { PerformanceMetricsChartComponent } from './dashboard/dashboard-charts/performance-metrics-chart/performance-metrics-chart.component';
import { InvestmentFormComponent } from './dashboard/investment-form/investment-form.component';
import { NgChartsModule } from 'ng2-charts';
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DashboardChartsComponent,
    AssetAllocationChartComponent,
    MarketTrendsChartComponent,
    PerformanceMetricsChartComponent,
    InvestmentFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgChartsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
