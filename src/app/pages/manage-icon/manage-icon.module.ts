import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManageIconPageRoutingModule } from './manage-icon-routing.module';

import { ManageIconPage } from './manage-icon.page';

import { TranslateModule } from '@ngx-translate/core';

import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';

import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { Crop } from '@ionic-native/crop/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManageIconPageRoutingModule,
    TranslateModule.forChild()
  ],
  providers: [
    ImagePicker,
    Crop,
    FileTransfer,
    FileTransferObject
  ],
  declarations: [ManageIconPage]
})
export class ManageIconPageModule {}
