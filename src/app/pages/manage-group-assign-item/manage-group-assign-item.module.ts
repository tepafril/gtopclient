import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManageGroupAssignItemPageRoutingModule } from './manage-group-assign-item-routing.module';

import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManageGroupAssignItemPageRoutingModule,
    TranslateModule.forChild()
  ],
  declarations: []
})
export class ManageGroupAssignItemPageModule {}
