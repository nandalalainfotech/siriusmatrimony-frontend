import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashBoardComponent } from './dash-board.component';

const routes: Routes = [
  {
    path: "",
    component: DashBoardComponent,
    children: [
      // {
      //   path: "",
      //   component: BodyComponent,
      // },
      // {
      //   path:'app-sidemenu-dashboard',
      //   loadChildren:() => import("./sidemenu-dashboard/sidemenu-dashboard.module").then(m => m.SidemenuDashboardModule)
      // },
      {
        path: 'app-categorydetails',
        loadChildren: () => import("./categorydetails/categorydetails.module").then(m => m.CategorydetailsModule)
      },
      {
        path: 'app-contentmaster',
        loadChildren: () => import("./contentmaster/contentmaster.module").then(m => m.ContentmasterModule)
      },
      {
        path: 'app-subcriberdetails',
        loadChildren: () => import("./subcriberdetails/subcriberdetails.module").then(m => m.SubcriberdetailsModule)
      },
      {
        path: 'app-subscriptionmaster',
        loadChildren: () => import("./subscriptionmaster/subscriptionmaster.module").then(m => m.SubscriptionmasterModule)
      },
      {
        path: 'app-side-menu',
        loadChildren: () => import("./side-menu/side-menu.module").then(m => m.SideMenuModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
