import { Component, OnInit } from '@angular/core';

import { Platform, AlertController, MenuController, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AuthService } from './services/auth.service';
import { AlertService } from './services/alert.service';
import { LanguageService } from './services/language.service';

import { OneSignal } from '@ionic-native/onesignal/ngx';

import { ENV } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  
  public appPages = [
    {
      title: 'គណនីខ្ញុំ',
      url: '/profile',
      icon: 'user'
    },
    {
      title: 'សុពលភាព',
      url: '/',
      icon: ''
    },
    {
      title: 'ប្តូរភាសា',
      url: '/',
      icon: ''
    },
    {
      title: 'ចាកចេញ',
      url: '/list',
      icon: ''
    }
  ];


  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private menuCtrl: MenuController,
    private authService: AuthService,
    private navCtrl: NavController,
    private oneSignal: OneSignal,
    private alertCtrl: AlertController,
    private alertService: AlertService,
    private languageService: LanguageService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      if (this.platform.is('cordova')) {
        this.setupPush();
        this.statusBar.styleDefault();
        this.splashScreen.hide();
        this.menuCtrl.enable(false);
        // this.menuCtrl.swipeEnable(false);
        this.menuCtrl.swipeGesture(false);
      }

      this.authService.getToken();
      this.languageService.initAppLanguage();
    });
  }

  ngOnInit(){
    
  }


  setupPush() {
    // I recommend to put these into your environment.ts
    this.oneSignal.startInit(ENV.ONESIGNAL.appId, ENV.ONESIGNAL.googleProjectNumber);
 
    this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.None);

 
    // Notifcation was received in general
    this.oneSignal.handleNotificationReceived().subscribe(data => {
      let msg = data.payload.body;
      let title = data.payload.title;
      let additionalData = data.payload.additionalData;
    
      // this.showAlert(title, msg, additionalData.task);
    });

    // Notification was really clicked/opened
    this.oneSignal.handleNotificationOpened().subscribe(data => {
      // Just a note that the data is a different place here!
      let additionalData = data.notification.payload.additionalData;
 
      // this.showAlert('Notification opened', 'You already read this before', additionalData.task);
    });

    // this.oneSignal.setExternalUserId("3");

    this.oneSignal.addSubscriptionObserver().subscribe(state => {
      // this.showAlert('Notification opened', 'Player ID ' + state.to.userId, state.to.userId);

      if (!state.from.subscribed && state.to.subscribed) {
        // this.showAlert('Notification opened', 'Player ID ' + state.to.userId, state.to.userId);
      }
    });
 
    this.oneSignal.endInit();
  }
 
  async showAlert(title, msg, task) {
    const alert = await this.alertCtrl.create({
      header: title,
      subHeader: msg,
      buttons: [
        {
          text: `Action: ${task}`,
          handler: () => {
            // E.g: Navigate to a specific screen
          }
        }
      ]
    })
    alert.present();
  }

}
