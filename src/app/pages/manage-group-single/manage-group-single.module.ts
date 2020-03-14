import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManageGroupSinglePageRoutingModule } from './manage-group-single-routing.module';

import { ManageGroupSinglePage } from './manage-group-single.page';

import { TranslateModule } from '@ngx-translate/core';

import { ManageGroupAssignItemPage } from './../manage-group-assign-item/manage-group-assign-item.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManageGroupSinglePageRoutingModule,
    TranslateModule.forChild()
  ],
  declarations: [ManageGroupSinglePage, ManageGroupAssignItemPage],
  entryComponents: [ManageGroupAssignItemPage]
})
export class ManageGroupSinglePageModule {}
