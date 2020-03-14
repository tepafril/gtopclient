import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { EnginePageRoutingModule } from './engine-routing.module';
import { EnginePage } from './engine.page';

import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EnginePageRoutingModule,
    TranslateModule.forChild()
  ],
  declarations: [EnginePage]
})
export class EnginePageModule {}
