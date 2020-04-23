import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PolygonfencePage } from './polygonfence.page';

const routes: Routes = [
  {
    path: '',
    component: PolygonfencePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PolygonfencePageRoutingModule {}
