import { Component, ViewChild, OnInit } from '@angular/core';
import { Platform, NavController, ModalController } from "@ionic/angular";
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
import { SelectDevicePage } from '../select-device/select-device.page';


@Component({
  selector: 'app-disarm',
  templateUrl: './disarm.page.html',
  styleUrls: ['./disarm.page.scss'],
})
export class DisarmPage implements OnInit {

  @ViewChild(IonInfiniteScroll, {static:false}) infiniteScroll: IonInfiniteScroll;


  loading:any;
  arm_alert:boolean;
  disarm_alert:boolean;
  httpResponse;
  dataList:any = [];
  dateTemp:any = 0;
  deviceid;
  pagination = 1;

  item_name;
  item_icon;

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
    private modalController: ModalController
  ) {
  }

  ngOnInit() {
    this.presentLoadingWithOptions();
    this.storageService.setItem().subscribe(res => {
    },(err) => {
      console.log(err);
    }, () => {
      this.current_item = this.storageService.current_item;
      this.initIgnitionQuery( this.current_item.deviceid );
    });
  }

  initIgnitionQuery(deviceid){
    this.dataList = [];
    this.pagination = 1;
    this.dateTemp = '';
    this.traccarService.getIgnition(deviceid,this.pagination).subscribe(res => {
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
        
        this.httpResponse[i].serverdate = readableLocalDate;
        this.httpResponse[i].servertime = readableLocalTime;
        this.httpResponse[i].note_class = this.httpResponse[i].type;
        this.httpResponse[i].type = this.lang.instant('APP.'+this.httpResponse[i].type);
        this.dataList.push(this.httpResponse[i]);
      }
      this.pagination ++;
      this.item_name = this.current_item.name;
      this.item_icon = this.current_item.icon_name;
      
      this.arm_alert = this.current_item.arm_notification;
      this.disarm_alert = this.current_item.disarm_notification;
      this.deviceid = this.current_item.deviceid;
      this.loading.dismiss();
    });
  }

  loadData(event) {

    this.traccarService.getIgnition(this.deviceid,this.pagination).subscribe(res => {
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
        
        this.httpResponse[i].serverdate = readableLocalDate;
        this.httpResponse[i].servertime = readableLocalTime;
        this.httpResponse[i].note_class = this.httpResponse[i].type;
        this.httpResponse[i].type = this.lang.instant('APP.'+this.httpResponse[i].type);
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


  async selectDevice()
  {
    const assignItemModal = await this.modalController.create({
      component: SelectDevicePage,
      componentProps: {
        // groupItems: this.groupItems,
        // groupID: this.groupID
        moduleName: "module_ignition"
      }
    });

    assignItemModal.onDidDismiss().then((res)=>{
      this.selectedItems = res.data;
      
      // Present Preloading
      this.presentLoadingWithOptions();
      this.storageService.setItem().subscribe(res => {
      },(err) => {
        console.log(err);
      }, () => {
        this.current_item = this.selectedItems;
        this.initIgnitionQuery( this.current_item.deviceid );
      });

      

    }).catch(err => {
      console.log(err);
    });

    return await assignItemModal.present();
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

    return this.http.get(ENDPOINT.API_URL + 'event/ignition/notification/' + type + '/' + deviceid + '/' + bool, { headers: headers })
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
