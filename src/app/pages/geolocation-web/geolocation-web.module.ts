import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GeolocationWebPageRoutingModule } from './geolocation-web-routing.module';

import { GeolocationWebPage } from './geolocation-web.page';

import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GeolocationWebPageRoutingModule,
    TranslateModule.forChild()
  ],
  declarations: [GeolocationWebPage],
  entryComponents: []
})
export class GeolocationWebPageModule {}
