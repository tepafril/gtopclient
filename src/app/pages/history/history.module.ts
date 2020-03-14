import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistoryPageRoutingModule } from './history-routing.module';

import { HistoryPage } from './history.page';

import { HistoryDatePickerPage } from './../history-date-picker/history-date-picker.page';

import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistoryPageRoutingModule,
    TranslateModule.forChild()
  ],
  declarations: [HistoryPage,HistoryDatePickerPage],
  entryComponents: [HistoryDatePickerPage],
})
export class HistoryPageModule {}
