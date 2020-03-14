import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrafficPageRoutingModule } from './traffic-routing.module';

import { TrafficPage } from './traffic.page';

import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrafficPageRoutingModule,
    TranslateModule.forChild()
  ],
  declarations: [TrafficPage]
})
export class TrafficPageModule {}
