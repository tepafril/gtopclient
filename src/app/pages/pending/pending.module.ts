import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PendingPageRoutingModule } from './pending-routing.module';

import { PendingPage } from './pending.page';

import { NgxQRCodeModule } from 'ngx-qrcode2';

import { PendingHelpPage } from '../pending-help/pending-help.page';

import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PendingPageRoutingModule,
    NgxQRCodeModule,
    TranslateModule.forChild()
  ],
  declarations: [PendingPage, PendingHelpPage],
  entryComponents: [PendingHelpPage],
})
export class PendingPageModule {}
