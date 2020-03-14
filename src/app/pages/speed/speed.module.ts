import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SpeedPageRoutingModule } from './speed-routing.module';

import { SpeedPage } from './speed.page';

import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SpeedPageRoutingModule,
    TranslateModule.forChild()
  ],
  declarations: [SpeedPage]
})
export class SpeedPageModule {}
