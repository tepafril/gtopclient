import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManageGroupAssignItemPage } from './manage-group-assign-item.page';

const routes: Routes = [
  {
    path: '',
    component: ManageGroupAssignItemPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManageGroupAssignItemPageRoutingModule {}
