import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GeolocationPageRoutingModule } from './geolocation-routing.module';

import { GeolocationPage } from './geolocation.page';

import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GeolocationPageRoutingModule,
    TranslateModule.forChild()
  ],
  declarations: [GeolocationPage]
})
export class GeolocationPageModule {}
