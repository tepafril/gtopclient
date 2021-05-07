import { Component, OnInit } from '@angular/core';
import { ModalController, MenuController, NavController, LoadingController, PopoverController } from '@ionic/angular';
import { AlertService } from 'src/app/services/alert.service';
import { RegisterPage } from '../register/register.page';
import { LoginPage } from '../login/login.page';
import { ForgetpasswordPage } from '../forgetpassword/forgetpassword.page';
import { ChooseLanguagePage } from '../choose-language/choose-language.page';
import { AuthService } from 'src/app/services/auth.service';
import { LanguageService } from 'src/app/services/language.service';
import { ENV } from '../../../environments/environment';
// import * as firebase from 'firebase/app';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit {

  loading:any;
  httpResponse:any;

  constructor(
    private modalController: ModalController,
    private menu: MenuController,
    private authService: AuthService,
    private navCtrl: NavController,
    private alertService: AlertService,
    private popoverController: PopoverController,
    private loadingController: LoadingController,
    private languageService: LanguageService
  ) { 
    // if (!firebase.apps.length) {
    //   firebase.initializeApp( ENV.FIREBASE );
    // }
  }

  ionViewWillEnter() {
    this.menu.enable(false, "mainMenu");
    this.authService.getToken().then(() => {
      if( this.authService.isLoggedIn )
      {
        this.presentLoading();
        this.authService.checkPassport().subscribe( res => {
          this.httpResponse = res;
        }, err => {
          this.authService.clearToken();
          this.loading.dismiss();
        }, () =>{
          this.loading.dismiss();
          this.navCtrl.navigateRoot('/dashboard');
        });
      }
    });
  }

  ngOnInit() {
    
  }

  async register() {
    const registerModal = await this.modalController.create({
      component: RegisterPage
    });
    return await registerModal.present();
  }

  async login() {
    const loginModal = await this.modalController.create({
      component: LoginPage,
    });
    return await loginModal.present();
  }

  async forgetpassword(){
    const forgotPasswordModal = await this.modalController.create({
      component: ForgetpasswordPage,
    });
    return await forgotPasswordModal.present();
  }


  async presentLoading() {
    this.loading = await this.loadingController.create({
      message: 'Please wait',
      duration: 10000
    });
    await this.loading.present();
  }

  async chooseLanguage(ev: any) {
    const popover = await this.popoverController.create({
      component: ChooseLanguagePage,
      event: ev,
      translucent: true
    });
    return await popover.present();
  }
}
