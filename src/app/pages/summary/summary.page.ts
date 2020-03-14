import { Component, ViewChild, OnInit } from '@angular/core';
import { Platform, NavController, PopoverController, ModalController } from "@ionic/angular";
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
import { TripDetailPage } from '../trip-detail/trip-detail.page';
import { SelectDevicePage } from '../select-device/select-device.page';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.page.html',
  styleUrls: ['./summary.page.scss'],
})
export class SummaryPage implements OnInit {

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

  fromDateStr;
  toDateStr;

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
    private popoverController: PopoverController,
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
        moduleName: "module_summary"
      }
    });

    assignItemModal.onDidDismiss().then((res)=>{
      this.selectedItems = res.data;
      
      // Present Preloading
      this.storageService.setItem().subscribe(res => {
      },(err) => {
        console.log(err);
      }, () => {
        this.current_item = this.selectedItems;
        this.deviceid = this.current_item.deviceid;
        let today = new Date();
  
        this.fromDateStr = this.readableLocalDate(today) + '[00:00]';
        this.toDateStr = this.readableLocalDate(today) + '[23:59]';
  
        let from_date_str = this.helper.phpDateGMT7(today);
        from_date_str += ' 00:00:00';
    
        let to_date_str = this.helper.phpDateGMT7(today);
        to_date_str += ' ' + this.helper.phpTimeGMT7(today);
    
        this.loadData( from_date_str, to_date_str );
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

      this.fromDateStr = this.readableLocalDate(today) + '[00:00]';
      this.toDateStr = this.readableLocalDate(today) + '[23:59]';

      let from_date_str = this.helper.phpDateGMT7(today);
      from_date_str += ' 00:00:00';
  
      let to_date_str = this.helper.phpDateGMT7(today);
      to_date_str += ' ' + this.helper.phpTimeGMT7(today);
  
      this.loadData( from_date_str, to_date_str );
    });
  }

  loadData( from, to ) {
    this.presentLoadingWithOptions();
    this.dataList = [];
    this.pagination = 1;
    this.dateTemp = '';
    this.traccarService.getSummary(this.deviceid, from, to).subscribe(res => {
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
      this.httpResponse = JSON.parse(this.httpResponse.summary);
      this.dateTemp = '';
      for( let i = 0; i < this.httpResponse.length; i++ ){

        this.httpResponse[i].distance     = (this.httpResponse[i].distance / 1000).toFixed(2) + ' ' + this.lang.instant('SUMMARY_PAGE.km');        
        this.httpResponse[i].averageSpeed = (this.httpResponse[i].averageSpeed * 1.852).toFixed(2) + ' ' + this.lang.instant('SUMMARY_PAGE.kmh');
        this.httpResponse[i].maxSpeed     = (this.httpResponse[i].maxSpeed * 1.852).toFixed(2) + ' ' + this.lang.instant('SUMMARY_PAGE.kmh');

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

  segmentChanged(ev:any){
    this.segmentVal = ev.target.value;
    
    if( this.segmentVal == "today" )
    {
      let today = new Date();
      
      this.fromDateStr = this.readableLocalDate(today) + ' [00:00]';
      this.toDateStr = this.readableLocalDate(today) + ' [23:59]';
  
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
      
      this.fromDateStr = this.readableLocalDate(yesterday) + ' [00:00]';
      this.toDateStr = this.readableLocalDate(yesterday) + ' [23:59]';

      let to_date_str = this.helper.phpDateGMT7( yesterday );
      to_date_str += ' 23:59:59';
  
      let from_date_str = this.helper.phpDateGMT7( yesterday );
      from_date_str += ' 00:00:00';

      this.dataList = [];
      this.loadData(from_date_str, to_date_str);
    }
    else{
      this.dataList = [];
      this.fromDate = '';
      this.toDate = '';
    }
  }

  onDateChanged()
  {
    if( this.fromDate && this.toDate )
    {

      this.fromDateStr = this.readableLocalDate(this.fromDate) + ' [' + this.readableLocalTime(this.fromDate) + ']';
      this.toDateStr = this.readableLocalDate(this.toDate) + ' [' + this.readableLocalTime(this.toDate) + ']';

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

  private readableLocalDate( the_date )
  {
    let d:any;
    if(this.platform.is('ios')){
      d = new Date( the_date );
    }
    else{
      d = new Date( the_date ).toUTCString();
      d = new Date(d);
    }

    let dayNames = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    let monthNames = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];

    let s = '';
    if( d.getDate() < 10 ){
      s +=  '0' + d.getDate().toString();
    }
    else{
      s +=  d.getDate().toString();
    }
    s +=  '/' + this.lang.instant('APP.' + monthNames[d.getMonth()] );
    s += '/' + d.getFullYear();
    return s;
  }

  private readableLocalTime( the_date )
  {
    let d:any;
    if(this.platform.is('ios')){
      d = new Date( the_date );
    }
    else{
      d = new Date( the_date ).toUTCString();
      d = new Date(d);
    }
    // d = new Date();
    
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
    
    return s;
  }

}