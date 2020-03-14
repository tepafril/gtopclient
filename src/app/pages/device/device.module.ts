import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DevicePageRoutingModule } from './device-routing.module';

import { DevicePage } from './device.page';

import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DevicePageRoutingModule,
    TranslateModule.forChild()
  ],
  declarations: [DevicePage]
})
export class DevicePageModule {}
