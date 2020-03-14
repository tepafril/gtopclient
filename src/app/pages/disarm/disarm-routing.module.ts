import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DisarmPage } from './disarm.page';

const routes: Routes = [
  {
    path: '',
    component: DisarmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DisarmPageRoutingModule {}
