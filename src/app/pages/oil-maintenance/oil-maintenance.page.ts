import { Component, ViewChild, OnInit } from '@angular/core';
import { PickerController, Platform, NavController } from "@ionic/angular";
import { PickerOptions } from '@ionic/core';
import { LoadingController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { StorageService } from 'src/app/services/storage.service';
import { TraccarService } from 'src/app/services/traccar.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { ENDPOINT } from '../../../environments/environment';
import { IonInfiniteScroll } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-oil-maintenance',
  templateUrl: './oil-maintenance.page.html',
  styleUrls: ['./oil-maintenance.page.scss'],
})
export class OilMaintenancePage implements OnInit {

  @ViewChild(IonInfiniteScroll, {static:false}) infiniteScroll: IonInfiniteScroll;


  loading:any;
  oil_maintenance_alert:boolean;
  oil_maintenance_start;
  oil_maintenance_period;
  httpResponse;
  dataList:any = [];
  dateTemp:any = 0;
  deviceid;
  pagination = 1;

  item_name;
  item_icon;

  constructor( 
    private http: HttpClient, 
    private authService: AuthService, 
    private navCtrl: NavController, 
    public loadingController: LoadingController,
    private traccarService: TraccarService,
    private lang: TranslateService,
    public platform: Platform,
    private alertService: AlertService,
    private storageService: StorageService,
    private pickerController: PickerController
  ) {
  }

  ngOnInit() {
    this.presentLoadingWithOptions();
    this.storageService.setItem().subscribe(res => {
    },(err) => {
      console.log(err);
    }, () => {
      this.initIgnitionQuery( this.storageService.current_item.deviceid );
      console.log(this.storageService.current_item);
    });
  }

  initIgnitionQuery(deviceid){
    this.traccarService.getOilMaintenance(deviceid,this.pagination).subscribe(res => {
      this.httpResponse = res;
      this.httpResponse = JSON.parse(this.httpResponse.events);
    }, err => {
      if( err.error.message ){
        this.alertService.presentToast( err.error.message ,"danger");
      }
      else{
        this.alertService.presentToast( err.message ,"danger");
      }
      this.loading.dismiss();
    }, ()=>{
      for( let i = 0; i < this.httpResponse.length; i++ ){
        let readableLocalDate = this.readableLocalDate(this.httpResponse[i].servertime);
        let readableLocalTime = this.readableLocalTime(this.httpResponse[i].servertime);
        let systemDate = this.systemDate(this.httpResponse[i].servertime);
        
        if( this.dateTemp == systemDate ){
          this.httpResponse[i].have_group = '0';
        }
        else{
          this.dateTemp = systemDate;
          this.httpResponse[i].have_group = readableLocalDate;
        }

        let attributes = JSON.parse(this.httpResponse[i].attributes);
        this.httpResponse[i].totalDistance = Math.round(attributes.totalDistance / 1000);
        
        this.httpResponse[i].serverdate = readableLocalDate;
        this.httpResponse[i].servertime = readableLocalTime;
        
        this.dataList.push(this.httpResponse[i]);
      }
      this.pagination ++;
      this.item_name = this.storageService.current_item.name;
      this.item_icon = this.storageService.current_item.icon_name;
      
      this.oil_maintenance_alert = this.storageService.current_item.oil_maintenance_notification;
      this.oil_maintenance_start = Math.round(this.storageService.current_item.oil_maintenance_start/1000);
      this.oil_maintenance_period = Math.round(this.storageService.current_item.oil_maintenance_period/1000);
      this.deviceid = this.storageService.current_item.deviceid;
      this.loading.dismiss();
    });
  }

  loadData(event) {

    this.traccarService.getOilMaintenance(this.deviceid,this.pagination).subscribe(res => {
      this.httpResponse = res;
      this.httpResponse = JSON.parse(this.httpResponse.events);
    }, err => {
      if( err.error.message ){
        this.alertService.presentToast( err.error.message ,"danger");
      }
      else{
        this.alertService.presentToast( err.message ,"danger");
      }
      this.loading.dismiss();
    }, ()=>{
      for( let i = 0; i < this.httpResponse.length; i++ ){
        let readableLocalDate = this.readableLocalDate(this.httpResponse[i].servertime);
        let readableLocalTime = this.readableLocalTime(this.httpResponse[i].servertime);
        let systemDate = this.systemDate(this.httpResponse[i].servertime);
        
        if( this.dateTemp == systemDate ){
          this.httpResponse[i].have_group = '0';
        }
        else{
          this.dateTemp = systemDate;
          this.httpResponse[i].have_group = readableLocalDate;
        }

        let attributes = JSON.parse(this.httpResponse[i].attributes);
        this.httpResponse[i].totalDistance = Math.round(attributes.totalDistance / 1000);

        this.httpResponse[i].serverdate = readableLocalDate;
        this.httpResponse[i].servertime = readableLocalTime;

        this.dataList.push(this.httpResponse[i]);
      }
      event.target.complete();

      if (this.httpResponse.length < 40) {
        event.target.disabled = true;
      }

      this.pagination++;
    });
  }

  goBack(){
    this.navCtrl.navigateBack('dashboard/tabs/home');
  }

  private async presentLoadingWithOptions() {
    this.loading = await this.loadingController.create({
      duration: 15000,
      message: 'Please wait...',
      translucent: true,
      cssClass: 'custom-class custom-loading'
    });
    return await this.loading.present();
  }

  preparingRequest(type, deviceid, bool){

    this.authService.getToken();
    let token = this.authService.token;

    const headers = new HttpHeaders({
      'Authorization': token["token_type"]+" "+token["access_token"]
    });

    return this.http.get(ENDPOINT.API_URL + 'event/oil-maintenance/notification/' + type + '/' + deviceid + '/' + bool, { headers: headers })
    .pipe(
      tap(data => {
        return data;
      })
    );


  }

  toggleOilMaintenanceAlert(ev: any){
    this.presentLoadingWithOptions();
    setTimeout(() => {
      this.preparingRequest('oil_maintenance_notification',this.deviceid,this.oil_maintenance_alert).subscribe(
        data => {
          this.loading.dismiss();
        },error => {
          // alert(error.error.message);
          this.loading.dismiss();
        },
        () => {
          this.loading.dismiss();
        }
      );
    }, 50);
  }


  ionPickerHandler:any;
  async showBasicPicker(field){
    let opts: PickerOptions ={
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: (data) =>{
            this.ionPickerHandler = 'cancel'
          }
        },
        {
          text: 'Done',
          handler: (data) =>{
            this.ionPickerHandler = 'done'
          }
        }
      ],
      columns: [
        {
          name: 'Distance',
          options: [
            { text: '1' + this.lang.instant('OIL_PAGE.km'), value: 1 },
            { text: '100' + this.lang.instant('OIL_PAGE.km'), value: 100 },
            { text: '250' + this.lang.instant('OIL_PAGE.km'), value: 250 },
            { text: '500' + this.lang.instant('OIL_PAGE.km'), value: 500 },
            { text: '750' + this.lang.instant('OIL_PAGE.km'), value: 750 },
            { text: '1000' + this.lang.instant('OIL_PAGE.km'), value: 1000 },
            { text: '1500' + this.lang.instant('OIL_PAGE.km'), value: 1500 },
            { text: '2000' + this.lang.instant('OIL_PAGE.km'), value: 2000 },
            { text: '2500' + this.lang.instant('OIL_PAGE.km'), value: 2500 },
            { text: '3000' + this.lang.instant('OIL_PAGE.km'), value: 3000 },
            { text: '3500' + this.lang.instant('OIL_PAGE.km'), value: 3500 },
            { text: '4000' + this.lang.instant('OIL_PAGE.km'), value: 4000 },
            { text: '4500' + this.lang.instant('OIL_PAGE.km'), value: 4500 },
            { text: '5000' + this.lang.instant('OIL_PAGE.km'), value: 5000 },
            { text: '5500' + this.lang.instant('OIL_PAGE.km'), value: 5500 },
            { text: '6000' + this.lang.instant('OIL_PAGE.km'), value: 6000 },
            { text: '6500' + this.lang.instant('OIL_PAGE.km'), value: 6500 },
            { text: '7000' + this.lang.instant('OIL_PAGE.km'), value: 7000 },
            { text: '7500' + this.lang.instant('OIL_PAGE.km'), value: 7500 },
            { text: '8000' + this.lang.instant('OIL_PAGE.km'), value: 8000 },
            { text: '8500' + this.lang.instant('OIL_PAGE.km'), value: 8500 },
            { text: '9000' + this.lang.instant('OIL_PAGE.km'), value: 9000 },
            { text: '9500' + this.lang.instant('OIL_PAGE.km'), value: 9500 },
            { text: '10000' + this.lang.instant('OIL_PAGE.km'), value: 10000 },
            { text: '10500' + this.lang.instant('OIL_PAGE.km'), value: 10500 },
            { text: '11000' + this.lang.instant('OIL_PAGE.km'), value: 11000 },
            { text: '11500' + this.lang.instant('OIL_PAGE.km'), value: 11500 },
            { text: '12000' + this.lang.instant('OIL_PAGE.km'), value: 12000 },
            { text: '12500' + this.lang.instant('OIL_PAGE.km'), value: 12500 },
            { text: '13000' + this.lang.instant('OIL_PAGE.km'), value: 13000 },
            { text: '13500' + this.lang.instant('OIL_PAGE.km'), value: 13500 },
            { text: '14000' + this.lang.instant('OIL_PAGE.km'), value: 14000 },
            { text: '14500' + this.lang.instant('OIL_PAGE.km'), value: 14500 },
            { text: '15000' + this.lang.instant('OIL_PAGE.km'), value: 15000 },
            { text: '15500' + this.lang.instant('OIL_PAGE.km'), value: 15500 },
            { text: '16000' + this.lang.instant('OIL_PAGE.km'), value: 16000 },
            { text: '16500' + this.lang.instant('OIL_PAGE.km'), value: 16500 },
            { text: '17000' + this.lang.instant('OIL_PAGE.km'), value: 17000 },
            { text: '17500' + this.lang.instant('OIL_PAGE.km'), value: 17500 },
            { text: '18000' + this.lang.instant('OIL_PAGE.km'), value: 18000 },
            { text: '18500' + this.lang.instant('OIL_PAGE.km'), value: 18500 },
            { text: '19000' + this.lang.instant('OIL_PAGE.km'), value: 19000 },
            { text: '19500' + this.lang.instant('OIL_PAGE.km'), value: 19500 },
            { text: '20000' + this.lang.instant('OIL_PAGE.km'), value: 20000 },
            { text: '20500' + this.lang.instant('OIL_PAGE.km'), value: 20500 },
            { text: '21000' + this.lang.instant('OIL_PAGE.km'), value: 21000 },
            { text: '21500' + this.lang.instant('OIL_PAGE.km'), value: 21500 },
            { text: '22000' + this.lang.instant('OIL_PAGE.km'), value: 22000 },
            { text: '22500' + this.lang.instant('OIL_PAGE.km'), value: 22500 },
            { text: '23000' + this.lang.instant('OIL_PAGE.km'), value: 23000 },
            { text: '23500' + this.lang.instant('OIL_PAGE.km'), value: 23500 },
            { text: '24000' + this.lang.instant('OIL_PAGE.km'), value: 24000 },
            { text: '24500' + this.lang.instant('OIL_PAGE.km'), value: 24500 },
            { text: '25000' + this.lang.instant('OIL_PAGE.km'), value: 25000 },
            { text: '25500' + this.lang.instant('OIL_PAGE.km'), value: 25500 },
            { text: '26000' + this.lang.instant('OIL_PAGE.km'), value: 26000 },
            { text: '26500' + this.lang.instant('OIL_PAGE.km'), value: 26500 },
            { text: '27000' + this.lang.instant('OIL_PAGE.km'), value: 27000 },
            { text: '27500' + this.lang.instant('OIL_PAGE.km'), value: 27500 },
            { text: '28000' + this.lang.instant('OIL_PAGE.km'), value: 28000 },
            { text: '28500' + this.lang.instant('OIL_PAGE.km'), value: 28500 },
            { text: '29000' + this.lang.instant('OIL_PAGE.km'), value: 29000 },
            { text: '29500' + this.lang.instant('OIL_PAGE.km'), value: 29500 },
            { text: '30000' + this.lang.instant('OIL_PAGE.km'), value: 30000 },
          ]
        }
      ]
    };
    let picker = await this.pickerController.create(opts);
    picker.present();
    picker.onDidDismiss().then(async data => {
      if( this.ionPickerHandler == 'cancel' )
      {
        return;
      }
      this.presentLoadingWithOptions();
      let col = await picker.getColumn('Distance');
      if(field == 'oil-maintenance-start')
        this.oil_maintenance_start = col.options[col.selectedIndex].value;
      else if(field == 'oil-maintenance-period')
        this.oil_maintenance_period = col.options[col.selectedIndex].value;
      let distance = col.options[col.selectedIndex].value;

      this.preparingSpeedLimitRequest(this.deviceid, distance, field).subscribe(
        data => {
          this.loading.dismiss();
        },error => {
          alert(error.error.message);
          this.loading.dismiss();
        },
        () => {
          this.loading.dismiss();
        }
      );
    });
  }

  preparingSpeedLimitRequest(deviceid, distance_limit, field){

    this.authService.getToken();
    let token = this.authService.token;

    const headers = new HttpHeaders({
      'Authorization': token["token_type"]+" "+token["access_token"]
    });

    return this.http.get(ENDPOINT.API_URL + 'event/oil-maintenance/' + field, { headers: headers, params : { deviceid: deviceid, distance_limit: distance_limit } })
    .pipe(
      tap(data => {
        return data;
      })
    );

  }


  private systemDate( the_date )
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

    let s = '';

    if( d.getDate() < 10 ){
      s += '0' + d.getDate().toString();
    }
    else{
      s += d.getDate().toString();
    }
    s += '-'+monthNames[d.getMonth()];
    s += '-'+d.getFullYear();
    return s;
  }

  private readableLocalDate( the_date )
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

  private readableLocalTime( the_date )
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
    if( d.getSeconds() < 10 ){
      s += ':0' + d.getSeconds().toString();
    }
    else{
      s += ':' + d.getSeconds().toString();
    }
    
    return s;
  }
}
