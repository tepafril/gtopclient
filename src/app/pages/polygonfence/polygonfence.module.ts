import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PolygonfencePageRoutingModule } from './polygonfence-routing.module';

import { PolygonfencePage } from './polygonfence.page';

import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PolygonfencePageRoutingModule,
    TranslateModule.forChild()
  ],
  declarations: [PolygonfencePage]
})
export class PolygonfencePageModule {}
