import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GeolocationWebPage } from './geolocation-web.page';

const routes: Routes = [
  {
    path: '',
    component: GeolocationWebPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GeolocationWebPageRoutingModule {}
