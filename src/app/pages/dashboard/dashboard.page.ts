import { Component, OnInit } from '@angular/core';
import { Platform, ModalController, MenuController, NavController, LoadingController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { StorageService } from 'src/app/services/storage.service';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  sliderConfig = {
    slidesPerView: 1,
    centeredSlides: true
  };

  loading:any;
  httpResponse:any;
  routerLinkGeolocation = '/geolocation-web';

  constructor(
    private platform: Platform,
    private menu: MenuController,
    private authService: AuthService,
    private navCtrl: NavController,
    private alertService: AlertService,
    private loadingController: LoadingController,
    private storageService: StorageService
  ) {
    this.menu.enable(true);
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      if (this.platform.is('cordova')) {
        this.routerLinkGeolocation = '/geolocation';
      }
    });
  }


  ngOnInit() {
  }

  ionViewWillEnter() {
    this.presentLoading();
    this.authService.getToken().then(() => {
      if( this.authService.isLoggedIn )
      {
        this.authService.checkPassport().subscribe( res => {
          this.httpResponse = res;
        }, err => {
          this.authService.clearToken();
          if( err.error.message ){
            this.alertService.presentToast("<ion-text>" + err.error.message + "</ion-text>","danger");
          }
          else{
            this.alertService.presentToast("<ion-text>" + err.message + "</ion-text>","danger");
          }
          this.loading.dismiss();
          this.navCtrl.navigateRoot('/landing');
        }, () =>{
          this.loading.dismiss();
        });
      }
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
