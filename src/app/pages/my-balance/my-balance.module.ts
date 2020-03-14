import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyBalancePageRoutingModule } from './my-balance-routing.module';

import { MyBalancePage } from './my-balance.page';

import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyBalancePageRoutingModule,
    TranslateModule.forChild()
  ],
  declarations: [MyBalancePage]
})
export class MyBalancePageModule {}
