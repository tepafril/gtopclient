import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TireMaintenancePage } from './tire-maintenance.page';

const routes: Routes = [
  {
    path: '',
    component: TireMaintenancePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TireMaintenancePageRoutingModule {}
