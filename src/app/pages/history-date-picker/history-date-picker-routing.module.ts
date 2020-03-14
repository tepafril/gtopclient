import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HistoryDatePickerPage } from './history-date-picker.page';

const routes: Routes = [
  {
    path: '',
    component: HistoryDatePickerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistoryDatePickerPageRoutingModule {}
