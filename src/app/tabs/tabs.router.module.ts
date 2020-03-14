import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('./../pages/dashboard/dashboard.module').then(m => m.DashboardPageModule)
      },
      {
        path: 'support',
        loadChildren: () => import('./../pages/support/support.module').then(m => m.SupportPageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('./../pages/profile/profile.module').then(m => m.ProfilePageModule)
      },
      {
        path: 'traffic',
        loadChildren: () => import('./../pages/traffic/traffic.module').then(m => m.TrafficPageModule)
      },
      {
        path: '',
        redirectTo: 'tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
