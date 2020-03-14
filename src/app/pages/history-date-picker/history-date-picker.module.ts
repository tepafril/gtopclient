import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistoryDatePickerPageRoutingModule } from './history-date-picker-routing.module';

// import { HistoryDatePickerPage } from './history-date-picker.page';

import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistoryDatePickerPageRoutingModule,
    TranslateModule.forChild()
  ],
  declarations: []
})
export class HistoryDatePickerPageModule {}
