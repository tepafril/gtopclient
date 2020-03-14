import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TireMaintenancePageRoutingModule } from './tire-maintenance-routing.module';

import { TireMaintenancePage } from './tire-maintenance.page';

import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TireMaintenancePageRoutingModule,
    TranslateModule.forChild()
  ],
  declarations: [TireMaintenancePage]
})
export class TireMaintenancePageModule {}
