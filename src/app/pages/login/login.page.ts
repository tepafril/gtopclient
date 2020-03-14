import { Component, OnInit } from '@angular/core';
import { Platform, ModalController, NavController, LoadingController, ToastController } from '@ionic/angular';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { AlertService } from 'src/app/services/alert.service';
import { OneSignal } from '@ionic-native/onesignal/ngx';

import { FirebaseAuthentication } from '@ionic-native/firebase-authentication/ngx';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loading;
  phoneNumber;
  httpResponse;

  constructor(
    private platform: Platform,
    private modalController: ModalController,
    private authService: AuthService,
    private navCtrl: NavController,
    private alertService: AlertService,
    private loadingController: LoadingController,
    private oneSignal: OneSignal,
    public firebaseAuthentication: FirebaseAuthentication,
    public toastController: ToastController
  ) {
    
  }

  ngOnInit() {
  }

  // // Dismiss Login Modal
  dismissLogin() {
    this.modalController.dismiss();
  }

  login(form: NgForm) {
    this.presentLoading();
    this.phoneNumber = form.value.phone;
    this.authService.verifyPhone(this.phoneNumber).subscribe( data => {
      this.httpResponse = data;
      this.phoneNumber = this.httpResponse.phone;
      this.authService.login(this.phoneNumber, form.value.password).subscribe(
        data => {
          this.httpResponse = data;
        },
        err => {
          if( err.error.message ){
            this.alertService.presentToast("<ion-text>" + err.error.message + "</ion-text>","danger");
          }
          else{
            this.alertService.presentToast("<ion-text>" + err.message + "</ion-text>","danger");
          }
          this.loading.dismiss();
        },
        () => {
          this.alertService.presentToast("<ion-text>" + this.httpResponse.message + "</ion-text>","success");
          
          this.loading.dismiss();
          this.dismissLogin();

          // console.log("USERID: "+this.authService.user.id);

          if (this.platform.is('cordova')) {
            this.oneSignal.setExternalUserId(this.authService.user.id);
          }
          if(this.authService.isLoggedIn) {
            this.navCtrl.navigateRoot('/dashboard');
          }
        }
      );
    }, err => {
      console.log(err);
      if( err.error.message ){
        this.alertService.presentToast("<ion-text>" + err.error.message + "</ion-text>","danger");
      }
      else{
        this.alertService.presentToast("<ion-text>" + err.message + "</ion-text>","danger");
      }
      this.loading.dismiss();
    });
  }


  async presentLoading() {
    this.loading = await this.loadingController.create({
      message: 'Please wait',
      duration: 10000
    });
    await this.loading.present();
  }



}
