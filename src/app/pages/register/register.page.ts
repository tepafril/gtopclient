import { Component, OnInit } from '@angular/core';
import { Platform, ModalController, NavController, LoadingController } from '@ionic/angular';
import { NgForm } from '@angular/forms';
// import { cfaSignIn, cfaSignInPhoneOnCodeSent } from 'capacitor-firebase-auth';
import { AuthService } from 'src/app/services/auth.service';
import { AlertService } from 'src/app/services/alert.service';
import { TranslateService } from '@ngx-translate/core';
import * as firebase from 'firebase/app';


import { FirebaseAuthentication } from '@ionic-native/firebase-authentication/ngx';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  public sent: boolean;
  public phone_number: string;
  public busy: boolean = false;
  public recaptchaVerifier: firebase.auth.RecaptchaVerifier;



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


  signInWithCode(){
  }


  constructor(
    private modalController: ModalController,
    private authService: AuthService,
    private navCtrl: NavController,
    private alertService: AlertService,
    private platform: Platform,
    private loadingController: LoadingController,
    private lang: TranslateService,
    private firebaseAuthentication: FirebaseAuthentication
  ) {
  }

  ngOnInit() { 
  }

  dismissRegister() {
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
      this.alertService.presentToast("<ion-text class=\"ion-text-center\">" + this.lang.instant('APP.internet_not_work') + "</ion-text>","danger");
      return;
    }
    if( this.phoneNumber.length < 9 ){
      this.alertService.presentToast("<ion-text class=\"ion-text-center\">" + this.lang.instant('APP.please_validate_phone') + "</ion-text>","danger");
      return;
    }
    this.presentLoading();
    this.authService.isPhoneAvailable(this.phoneNumber).subscribe( data => {
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
      this.loading.dismiss();
    }, err => {
      if( err.error.message ){
        this.alertService.presentToast("<ion-text class=\"ion-text-center\">" + err.error.message + "</ion-text>","danger");
      }
      else{
        this.alertService.presentToast("<ion-text class=\"ion-text-center\">" + err.message + "</ion-text>","danger");
      }
      this.loading.dismiss();
    });
  }

  verifyOTP(form: NgForm){
    if( !navigator.onLine )
    {
      this.alertService.presentToast("<ion-text class=\"ion-text-center\">" + this.lang.instant('APP.internet_not_work') + "</ion-text>","danger");
      return;
    }
    this.presentLoading();
    // let credential = firebase.auth.PhoneAuthProvider.credential(this.firebaseVerificationId, form.value.otp);
    
    this.firebaseAuthentication.signInWithVerificationId(this.firebaseVerificationId, form.value.otp).then((user)=>{
      // console.log(user);
      
      this.firebaseAuthentication.getIdToken(true).then(idToken=>{
        this.fireabaseTokenId = idToken;
        console.log("this.fireabaseTokenId");
        console.log(this.fireabaseTokenId);
        console.log("end this.fireabaseTokenId");
        this.authService.verifyToken( this.fireabaseTokenId, "gpstopone" ).subscribe(
          data => {
            this.httpResponse = data;
          }, err => {
            if( err.error.message ){
              this.alertService.presentToast("<ion-text class=\"ion-text-center\">" + err.error.message + "</ion-text>","danger");
            }
            else{
              this.alertService.presentToast("<ion-text class=\"ion-text-center\">" + err.message + "</ion-text>","danger");
            }
            this.loading.dismiss();
          }, () => {
            this.isPinVerified = true;
            this.alertService.presentToast("<ion-text class=\"ion-text-center\">" + this.httpResponse.message + "</ion-text>","success");
            this.loading.dismiss();
          }
        );

      }).catch(error => {
        this.loading.dismiss();
        this.alertService.presentToast("<ion-text class=\"ion-text-center\">" + error + "</ion-text>","danger");
      });  
      
    }).catch((error)=>{
      console.log(error);
      this.loading.dismiss();
      this.alertService.presentToast("<ion-text class=\"ion-text-center\">" + error + "</ion-text>","danger");
    });

  }

  register(form: NgForm){
    if( !navigator.onLine )
    {
      this.alertService.presentToast("<ion-text>អ៉ីនធើណែតទូរស័ព្ទលោកអ្នកមិនដំណើរការនោះទេ! សូមរកកន្លែងមានសេវាឬភ្ជាប់ WiFi ដែលនៅជិតលោកអ្នក។</ion-text>","danger");
      return;
    }
    if( form.value.password.length < 6 ){
      this.alertService.presentToast("<ion-text>ពាក្យសំងាត់ត្រូវមានចំនួន6ខ្ទង់ឡើងទៅ</ion-text>","danger");
      return;
    }
    if( form.value.password != form.value.confirmPassword ){
      this.alertService.presentToast("<ion-text>ពាក្យសំងាត់សម្រាប់ផ្ទៀងផ្ទាត់មិនដូចគ្នាទេ</ion-text>","danger");
      return;
    }
    this.presentLoading();
    this.password = form.value.password;
    this.authService.register( this.fireabaseTokenId, form.value.password, form.value.confirmPassword, 'gpstopone' ).subscribe(
      data => {
        this.httpResponse = data;
        this.authService.login(this.phoneNumber, this.password).subscribe( data => {
          this.alertService.presentToast("<ion-text>" + this.httpResponse.message + "</ion-text>","success");
          this.dismissRegister();
          this.navCtrl.navigateForward('/pending');
        }, err => {
          if( err.error.message )
            this.alertService.presentToast("<ion-text>" + err.error.message + "</ion-text>","danger");
          else
            this.alertService.presentToast("<ion-text>" + err.message + "</ion-text>","danger");
          this.loading.dismiss();
        });
      }, err => {
        if( err.error.message )
          this.alertService.presentToast("<ion-text>" + err.error.message + "</ion-text>","danger");
        else
          this.alertService.presentToast("<ion-text>" + err.message + "</ion-text>","danger");
        this.loading.dismiss();
      }, () => {
        this.loading.dismiss();
      }
    );
  }

  async presentLoading() {
    this.loading = await this.loadingController.create({
      message: 'Please wait',
      duration: 10000
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


  onSubmit(formData) {
    if( this.platform.is('cordova') ){
      // cfaSignIn('phone', {"phone": "+85516827282"}).subscribe(
      //   user => console.log(user.phoneNumber)
      // );
    }
    else{
      // const appVerifier = this.recaptchaVerifier;
      // firebase.auth().signInWithPhoneNumber(formData.phone_number, appVerifier)
      // .then((confirmationResult) => {
      //   this.sent = true;
      //   const verification = prompt('Enter verification code');
      //   if (verification != null) {
      //     console.log(verification);
      //     confirmationResult.confirm(verification)
      //       .then((good) => {
      //         // all checks out
      //       })
      //       .catch((bad) => {
      //         // code verification was bad.
      //       });
      //   } else {
      //     console.log('No verification code entered');
      //   }
      // })
      // .catch((err) => {
      //   console.log('sms not sent', err);
      // });
    }
  }
  

}
