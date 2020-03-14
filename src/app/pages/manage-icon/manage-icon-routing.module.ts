import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManageIconPage } from './manage-icon.page';

const routes: Routes = [
  {
    path: '',
    component: ManageIconPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManageIconPageRoutingModule {}
