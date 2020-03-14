import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManageGroupSinglePage } from './manage-group-single.page';

const routes: Routes = [
  {
    path: '',
    component: ManageGroupSinglePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManageGroupSinglePageRoutingModule {}
