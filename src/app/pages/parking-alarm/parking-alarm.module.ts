import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ParkingAlarmPageRoutingModule } from './parking-alarm-routing.module';

import { ParkingAlarmPage } from './parking-alarm.page';

import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ParkingAlarmPageRoutingModule,
    TranslateModule.forChild()
  ],
  declarations: [ParkingAlarmPage]
})
export class ParkingAlarmPageModule {}
