import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManageGroupPageRoutingModule } from './manage-group-routing.module';

import { ManageGroupPage } from './manage-group.page';

import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManageGroupPageRoutingModule,
    TranslateModule.forChild()
  ],
  declarations: [ManageGroupPage]
})
export class ManageGroupPageModule {}
