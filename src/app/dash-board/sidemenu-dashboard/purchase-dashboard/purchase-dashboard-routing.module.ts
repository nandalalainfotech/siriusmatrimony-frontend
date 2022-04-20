import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PurchaseDashboardComponent } from './purchase-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: PurchaseDashboardComponent,
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PurchaseDashboardRoutingModule { }
