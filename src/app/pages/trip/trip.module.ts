import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TripPageRoutingModule } from './trip-routing.module';

import { TripPage } from './trip.page';

import { TranslateModule } from '@ngx-translate/core';

import { TripDetailPage } from '../trip-detail/trip-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TripPageRoutingModule,
    TranslateModule.forChild()
  ],
  declarations: [TripPage, TripDetailPage],
  entryComponents: [TripDetailPage]
})
export class TripPageModule {}
