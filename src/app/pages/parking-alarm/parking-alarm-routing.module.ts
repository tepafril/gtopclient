import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ParkingAlarmPage } from './parking-alarm.page';

const routes: Routes = [
  {
    path: '',
    component: ParkingAlarmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ParkingAlarmPageRoutingModule {}
