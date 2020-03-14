import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DisarmPageRoutingModule } from './disarm-routing.module';

import { DisarmPage } from './disarm.page';

import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DisarmPageRoutingModule,
    TranslateModule.forChild()
  ],
  declarations: [DisarmPage]
})
export class DisarmPageModule {}
