import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OilMaintenancePageRoutingModule } from './oil-maintenance-routing.module';

import { OilMaintenancePage } from './oil-maintenance.page';

import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OilMaintenancePageRoutingModule,
    TranslateModule.forChild()
  ],
  declarations: [OilMaintenancePage]
})
export class OilMaintenancePageModule {}
