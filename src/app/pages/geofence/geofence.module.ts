import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GeofencePageRoutingModule } from './geofence-routing.module';

import { GeofencePage } from './geofence.page';

import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GeofencePageRoutingModule,
    TranslateModule.forChild()
  ],
  declarations: [GeofencePage]
})
export class GeofencePageModule {}
