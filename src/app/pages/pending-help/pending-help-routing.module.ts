import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PendingHelpPage } from './pending-help.page';

const routes: Routes = [
  {
    path: '',
    component: PendingHelpPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PendingHelpPageRoutingModule {}
