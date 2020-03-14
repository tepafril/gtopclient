import { Component, OnInit } from '@angular/core';
import { ModalController, NavController, LoadingController } from '@ionic/angular';
import { NgForm } from '@angular/forms';
import { LoginPage } from '../login/login.page';
import * as firebase from 'firebase';
import { AlertService } from 'src/app/services/alert.service';
import { AuthService } from 'src/app/services/auth.service';
import { TranslateService } from '@ngx-translate/core';
import { FirebaseAuthentication } from '@ionic-native/firebase-authentication/ngx';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.page.html',
  styleUrls: ['./forgetpassword.page.scss'],
})
export class ForgetpasswordPage implements OnInit {

  firebaseVerificationId;
  fireabaseTokenId;
  isSent = false;
  phoneNumber;
  password;
  loading;
  isBackable = false;
  isPinVerified = false;
  httpResponse:any;
  public countDownTimer:string = '0:59';


  constructor(
    private modalController: ModalController,
    private loadingController: LoadingController,
    private alertService: AlertService,
    private authService: AuthService,
    private navCtrl: NavController,
    private lang: TranslateService,
    private firebaseAuthentication: FirebaseAuthentication
  ) {
  }

  ngOnInit() {  
  }

  dismissForgetPassword() {
    this.modalController.dismiss();
  }

  backToSendingOTP() {
    this.isSent = false;
    this.isPinVerified = false;
    this.countDownTimer = '0:59';
  }

  sendOTP(form: NgForm){
    this.phoneNumber = form.value.phone;
    if( !navigator.onLine )
    {
      this.alertService.presentToast( this.lang.instant('APP.internet_not_work') ,"danger");
      return;
    }
    if( this.phoneNumber.length < 9 ){
      this.alertService.presentToast( this.lang.instant('APP.please_validate_phone') ,"danger");
      return;
    }
    this.presentLoading();
    this.authService.verifyPhone(this.phoneNumber).subscribe( data => {
      this.httpResponse = data;
      this.phoneNumber = this.httpResponse.phone;

      // *******************************
      // Firebase Start Sending OTP
      // *******************************
      this.firebaseAuthentication.verifyPhoneNumber(this.phoneNumber, 30000).then((verificationID) => {
        this.isSent = true;
        this.startTimer(60);
        this.loading.dismiss();
        this.firebaseVerificationId = verificationID;
      }).catch((error) => {
        this.alertService.presentToast("<ion-text class=\"ion-text-center\">" + error + "</ion-text>","danger");
      });
      // *******************************
      // END Firebase Start Sending OTP
      // *******************************
      
    }, err => {
      if( err.error.message ){
        this.alertService.presentToast( err.error.message ,"danger");
      }
      else{
        this.alertService.presentToast( err.message ,"danger");
      }
      this.loading.dismiss();
    });
  }

  // verifyOTP(form: NgForm){
  //   if( !navigator.onLine )
  //   {
  //     this.alertService.presentToast( this.lang.instant('APP.internet_not_work') ,"danger");
  //     return;
  //   }
  //   this.presentLoading();
  //   let credential = firebase.auth.PhoneAuthProvider.credential(this.firebaseVerificationId, form.value.otp);
  //   firebase.auth().signInWithCredential(credential).then(()=>{
  //     firebase.auth().currentUser.getIdToken(true).then(idToken=>{
  //       this.fireabaseTokenId = idToken;
  //       this.authService.verifyToken( this.fireabaseTokenId ).subscribe(
  //         data => {
  //           this.httpResponse = data;
  //         }, err => {
  //           if( err.error.message ){
  //             this.alertService.presentToast( err.error.message ,"danger");
  //           }
  //           else{
  //             this.alertService.presentToast( err.message ,"danger");
  //           }
  //           this.loading.dismiss();
  //         }, () => {
  //           this.isPinVerified = true;
  //           this.alertService.presentToast( this.httpResponse.message ,"success");
  //           this.loading.dismiss();
  //         }
  //       );
  //     }).catch(error => {
  //       this.loading.dismiss();
  //       this.alertService.presentToast( error ,"danger");
  //     });  
  //   }).catch((error)=>{
  //     this.loading.dismiss();
  //     this.alertService.presentToast( error ,"danger");
  //   });
  // }

  // resetPassword(form: NgForm){
  //   if( !navigator.onLine )
  //   {
  //     this.alertService.presentToast( this.lang.instant('APP.internet_not_work') ,"danger");
  //     return;
  //   }
  //   if( form.value.password.length < 6 ){
  //     this.alertService.presentToast( this.lang.instant('APP.password_must_be_greater_than_6') ,"danger");
  //     return;
  //   }
  //   if( form.value.password != form.value.confirmPassword ){
  //     this.alertService.presentToast( this.lang.instant('APP.password_does_not_match') ,"danger");
  //     return;
  //   }
  //   this.presentLoading();
  //   this.password = form.value.password;
  //   this.authService.resetPassword( this.fireabaseTokenId, form.value.password, form.value.confirmPassword ).subscribe(
  //     data => {
  //       this.httpResponse = data;
  //       this.authService.login(this.phoneNumber, this.password).subscribe( data => {
  //         this.alertService.presentToast( this.httpResponse.message ,"success");
  //         this.dismissForgetPassword();
          
  //         if(this.authService.isLoggedIn && this.authService.isVerified) {
  //           this.navCtrl.navigateRoot('/dashboard');
  //         }
  //         else if(this.authService.isLoggedIn && !this.authService.isVerified){
  //           this.navCtrl.navigateRoot('/pending');
  //         }
          
  //       }, err => {
  //         if( err.error.message )
  //           this.alertService.presentToast( err.error.message ,"danger");
  //         else
  //           this.alertService.presentToast( err.message ,"danger");
  //         this.loading.dismiss();
  //       });
  //     }, err => {
  //       if( err.error.message )
  //         this.alertService.presentToast( err.error.message ,"danger");
  //       else
  //         this.alertService.presentToast( err.message ,"danger");
  //       this.loading.dismiss();
  //     }, () => {
  //       this.loading.dismiss();
  //     }
  //   );
  // }

  async presentLoading() {
    this.loading = await this.loadingController.create({
      message: 'Please wait',
      duration: 30000
    });
    await this.loading.present();
  }

  startTimer(startSec) {
    setTimeout(() => {
      startSec --;
      if( startSec > 10 )
        this.countDownTimer = '0:' + startSec;
      else
        this.countDownTimer = '0:0' + startSec;
      if( startSec > 0 )
      {
        this.startTimer(startSec);
      }
      else{
        this.isBackable = true;
      }
    },1000);
  }

}
