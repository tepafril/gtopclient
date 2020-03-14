import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LandingPage } from './landing.page';
import { LoginPage } from '../login/login.page';
import { RegisterPage } from '../register/register.page';
import { ForgetpasswordPage } from '../forgetpassword/forgetpassword.page';
import { TranslateModule } from '@ngx-translate/core';



const routes: Routes = [
  {
    path: '',
    component: LandingPage
  }
];


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    TranslateModule.forChild()
  ],
  declarations: [LandingPage, LoginPage, RegisterPage, ForgetpasswordPage],
  entryComponents: [LoginPage, RegisterPage, ForgetpasswordPage],
})
export class LandingPageModule {}
