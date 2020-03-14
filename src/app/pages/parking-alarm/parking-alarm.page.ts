import { Component, ViewChild, OnInit } from '@angular/core';
import { Platform, NavController, ModalController } from "@ionic/angular";
import { LoadingController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { StorageService } from 'src/app/services/storage.service';
import { TraccarService } from 'src/app/services/traccar.service';
import { HelperService } from 'src/app/services/helper.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { ENDPOINT } from '../../../environments/environment';
import { IonInfiniteScroll } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { AlertService } from 'src/app/services/alert.service';
import { SelectDevicePage } from '../select-device/select-device.page';

@Component({
  selector: 'app-parking-alarm',
  templateUrl: './parking-alarm.page.html',
  styleUrls: ['./parking-alarm.page.scss'],
})
export class ParkingAlarmPage implements OnInit {

  @ViewChild(IonInfiniteScroll, {static:false}) infiniteScroll: IonInfiniteScroll;


  loading:any;
  arm_alert:boolean;
  disarm_alert:boolean;
  httpResponse;
  dataList:any = [];
  dateTemp:any = 0;
  deviceid;
  pagination = 1;
  segmentVal = 'today';

  item_name;
  item_icon;

  fromDate;
  toDate;

  selectedItems;

  current_item;

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
    private helper: HelperService,
    private modalController: ModalController
  ) {
  }


  async selectDevice()
  {
    const assignItemModal = await this.modalController.create({
      component: SelectDevicePage,
      componentProps: {
        // groupItems: this.groupItems,
        // groupID: this.groupID
        moduleName: "module_parking"
      }
    });

    assignItemModal.onDidDismiss().then((res)=>{
      this.selectedItems = res.data;
      
      // Present Preloading
      this.storageService.setItem().subscribe(res => {
      },(err) => {
        console.log(err);
      }, () => {
        this.storageService.setItem().subscribe(res => {
        },(err) => {
          console.log(err);
        }, () => {
          this.current_item = this.selectedItems;
          this.deviceid = this.current_item.deviceid;
          let today = new Date();
      
          let from_date_str = this.helper.phpDateGMT7(today);
          from_date_str += ' 00:00:00';
      
          let to_date_str = this.helper.phpDateGMT7(today);
          to_date_str += ' ' + this.helper.phpTimeGMT7(today);
      
          this.loadData( from_date_str, to_date_str );
        });
      });

      

    }).catch(err => {
      console.log(err);
    });

    return await assignItemModal.present();
  }

  ngOnInit() {
    this.storageService.setItem().subscribe(res => {
    },(err) => {
      console.log(err);
    }, () => {
      this.current_item = this.storageService.current_item;
      this.deviceid = this.current_item.deviceid;
      let today = new Date();
  
      let from_date_str = this.helper.phpDateGMT7(today);
      from_date_str += ' 00:00:00';
  
      let to_date_str = this.helper.phpDateGMT7(today);
      to_date_str += ' ' + this.helper.phpTimeGMT7(today);
  
      this.loadData( from_date_str, to_date_str );
    });
  }

  loadData( from, to ) {
    this.dataList = [];
    this.pagination = 1;
    this.dateTemp = '';
    this.presentLoadingWithOptions();
    this.traccarService.getParking(this.deviceid, from, to).subscribe(res => {
      this.httpResponse = res;
    }, err => {
      if( err.error.message ){
        this.alertService.presentToast( err.error.message ,"danger");
      }
      else{
        this.alertService.presentToast( err.message ,"danger");
      }
      this.loading.dismiss();
    }, ()=>{
      this.loading.dismiss();
      this.httpResponse = JSON.parse(this.httpResponse.parking);
      this.dateTemp = '';
      for( let i = 0; i < this.httpResponse.length; i++ ){
        let startReadableLocalDate = this.readableLocalDate(this.httpResponse[i].startTime);
        let startReadableLocalTime = this.readableLocalTime(this.httpResponse[i].startTime);

        let endReadableLocalDate = this.readableLocalDate(this.httpResponse[i].endTime);
        let endReadableLocalTime = this.readableLocalTime(this.httpResponse[i].endTime);

        let systemDate = this.systemDate(this.httpResponse[i].startTime);
        
        if( this.dateTemp == systemDate ){
          this.httpResponse[i].have_group = '0';
        }
        else{
          this.dateTemp = systemDate;
          this.httpResponse[i].have_group = startReadableLocalDate;
        }
        
        this.httpResponse[i].startTimeStr = startReadableLocalTime;
        this.httpResponse[i].endTimeStr = endReadableLocalTime;
        this.httpResponse[i].duration = this.httpResponse[i].duration / 60000;
        if( this.httpResponse[i].duration < 60 ){
          this.httpResponse[i].durationStr = Math.round(this.httpResponse[i].duration) + this.lang.instant('APP.minute_s');
        }
        else if( this.httpResponse[i].duration < (60 * 60) ){
          this.httpResponse[i].durationStr = Math.round(this.httpResponse[i].duration / 60) + this.lang.instant('APP.hour_s');
        }
        else if( this.httpResponse[i].duration < (60 * 60 * 24) ){
          this.httpResponse[i].durationStr = Math.round(this.httpResponse[i].duration / 60 / 24) + this.lang.instant('APP.day_s');
        }
        this.dataList.push(this.httpResponse[i]);
      }
      this.item_name = this.current_item.name;
      this.item_icon = this.current_item.icon_name;
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

    return this.http.get(ENDPOINT.API_URL + 'event/parking-alarm/notification/' + type + '/' + deviceid + '/' + bool, { headers: headers })
    .pipe(
      tap(data => {
        return data;
      })
    );


  }

  toggleArmAlert(ev: any){
    this.presentLoadingWithOptions();
    setTimeout(() => {
      this.preparingRequest('arm_notification',this.deviceid,this.arm_alert).subscribe(
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

  toggleDisarmAlert(ev: any){
    this.presentLoadingWithOptions();
    setTimeout(() => {
      this.preparingRequest('disarm_notification',this.deviceid,this.disarm_alert).subscribe(
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

  segmentChanged(ev:any){
    this.segmentVal = ev.target.value;
    
    if( this.segmentVal == "today" )
    {
      let today = new Date();
  
      let from_date_str = this.helper.phpDateGMT7(today);
      from_date_str += ' 00:00:00';
  
      let to_date_str = this.helper.phpDateGMT7(today);
      to_date_str += ' ' + this.helper.phpTimeGMT7(today);

      this.dataList = [];
      this.loadData(from_date_str, to_date_str);
    }
    else if( this.segmentVal == "yesterday" )
    {
      let yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      
      let to_date_str = this.helper.phpDateGMT7( yesterday );
      to_date_str += ' 23:59:59';
  
      let from_date_str = this.helper.phpDateGMT7( yesterday );
      from_date_str += ' 00:00:00';

      this.dataList = [];
      this.loadData(from_date_str, to_date_str);
    }
    else{
      console.log(this.fromDate);
      this.dataList = [];
      this.fromDate = '';
      this.toDate = '';
    }
  }

  onDateChanged()
  {
    if( this.fromDate && this.toDate )
    {

      let fromDate = new Date(this.fromDate);
      let fromDateStr = this.helper.phpDateGMT7(fromDate);
      fromDateStr += ' ' + this.helper.phpTimeGMT7(fromDate);

      let toDate = new Date(this.toDate);
      let toDateStr = this.helper.phpDateGMT7(toDate);
      toDateStr += ' ' + this.helper.phpTimeGMT7(toDate);

      this.dataList = [];
      this.loadData(fromDateStr, toDateStr);

    }
  }

  private systemDate( the_date )
  {
    let d:any;
    if(this.platform.is('ios')){
      d = new Date( the_date.replace('.000+0000','') );
    }
    else{
      d = new Date( the_date ).toUTCString();
      d = new Date(d);
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
    let d:any;
    if(this.platform.is('ios')){
      d = new Date( the_date.replace('.000+0000','') );
    }
    else{
      d = new Date( the_date ).toUTCString();
      d = new Date(d);
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
    let d:any;
    if(this.platform.is('ios')){
      d = new Date( the_date.replace('.000+0000','') );
    }
    else{
      d = new Date( the_date ).toUTCString();
      d = new Date(d);
    }
    
    let s = '';
    if( d.getHours() < 10 ){
      s += '0' + d.getHours().toString();
    }
    else{
      s +=  d.getHours().toString();
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