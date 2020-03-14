import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OilMaintenancePage } from './oil-maintenance.page';

const routes: Routes = [
  {
    path: '',
    component: OilMaintenancePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OilMaintenancePageRoutingModule {}
