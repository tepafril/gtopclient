import { Component, OnInit } from '@angular/core';
import { Platform, NavController,AlertController } from "@ionic/angular";
import { LoadingController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { ENDPOINT } from '../../../environments/environment';
import { AlertService } from 'src/app/services/alert.service';
import { TraccarService } from 'src/app/services/traccar.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-device',
  templateUrl: './device.page.html',
  styleUrls: ['./device.page.scss'],
})
export class DevicePage implements OnInit {

  loading:any;
  httpResponse;
  devices;

  constructor( 
    private http: HttpClient,
    private authService: AuthService,
    private navCtrl: NavController,
    public loadingController: LoadingController,
    public alertController: AlertController,
    private alertService: AlertService,
    private traccarService: TraccarService,
    private lang: TranslateService,
    public platform: Platform,
   ) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.presentLoadingWithOptions();
    this.prepareQuery();
  }

  prepareQuery(){

    this.traccarService.getMyDevices().subscribe(res => {
      this.httpResponse = res;
      this.devices = this.httpResponse.items;
    }, err => {
      if( err.error.message ){
        this.alertService.presentToast( err.error.message ,"danger");
      }
      else{
        this.alertService.presentToast( err.message ,"danger");
      }
      this.loading.dismiss();
    }, ()=>{
      console.log(this.httpResponse);
      this.loading.dismiss();
    });
  }

  goBack(){
    this.navCtrl.navigateBack('dashboard/tabs/home');
  }

  async presentLoadingWithOptions() {
    this.loading = await this.loadingController.create({
      duration: 15000,
      message: 'Please wait...',
      translucent: true,
      cssClass: 'custom-class custom-loading'
    });
    return await this.loading.present();
  }



  public readableLocalDate( the_date )
  {
    let d:Date;
    if(this.platform.is('ios')){
      d = new Date( the_date.replace(' ', 'T'));
    }
    else{
      d = new Date( the_date + ' UTC');
    }

    let dayNames = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    let monthNames = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];

    let s = ' ' + this.lang.instant('APP.day');
    s += this.lang.instant('APP.' + dayNames[d.getDay()] );
    if( d.getDate() < 10 ){
      s += ' ' + this.lang.instant('APP.date') + '0' + d.getDate().toString();
    }
    else{
      s += ' ' + this.lang.instant('APP.date') +  d.getDate().toString();
    }
    s += ' ' + this.lang.instant('APP.month') +  this.lang.instant('APP.' + monthNames[d.getMonth()] );
    s += ' ' + this.lang.instant('APP.year') +  d.getFullYear();
    return s;
  }

  public readableLocalTime( the_date )
  {
    let d:Date;
    if(this.platform.is('ios')){
      d = new Date( the_date.replace(' ', 'T'));
    }
    else{
      d = new Date( the_date + ' UTC');
    }
    
    let s = '';
    if( d.getHours() < 10 ){
      s += ' ' + this.lang.instant('APP.time') + '0' + d.getHours().toString();
    }
    else{
      s += ' ' + this.lang.instant('APP.time') + d.getHours().toString();
    }
    if( d.getMinutes() < 10 ){
      s += ':0' + d.getMinutes().toString();
    }
    else{
      s += ':' + d.getMinutes().toString();
    }
    
    return s;
  }
}
