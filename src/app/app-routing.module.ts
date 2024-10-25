import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InvestmentFormComponent } from './dashboard/investment-form/investment-form.component';
import { DashboardChartsComponent } from './dashboard/dashboard-charts/dashboard-charts.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard/charts', pathMatch: 'full' }, 
  { path: 'dashboard/charts', component: DashboardChartsComponent }, 
  { path: 'dashboard/forms', component: InvestmentFormComponent }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
