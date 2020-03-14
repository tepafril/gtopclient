import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ForgetpasswordPageRoutingModule } from './forgetpassword-routing.module';

import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ForgetpasswordPageRoutingModule,
    TranslateModule.forChild()
  ],
  declarations: []
})
export class ForgetpasswordPageModule {}
