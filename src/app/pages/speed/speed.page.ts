import { Component, ViewChild, OnInit } from '@angular/core';
import { PickerController, Platform, NavController, LoadingController, IonInfiniteScroll, ModalController } from "@ionic/angular";
import { PickerOptions } from '@ionic/core';
import { AuthService } from 'src/app/services/auth.service';
import { StorageService } from 'src/app/services/storage.service';
import { TraccarService } from 'src/app/services/traccar.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { ENDPOINT } from '../../../environments/environment';
import { TranslateService } from '@ngx-translate/core';
import { AlertService } from 'src/app/services/alert.service';
import { SelectDevicePage } from '../select-device/select-device.page';


@Component({
  selector: 'app-speed',
  templateUrl: './speed.page.html',
  styleUrls: ['./speed.page.scss'],
})
export class SpeedPage implements OnInit {

  @ViewChild(IonInfiniteScroll, {static:false}) infiniteScroll: IonInfiniteScroll;


  loading:any;
  overspeed_alert:boolean;
  speed_limit:any = 1;
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
    private pickerController: PickerController,
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
        moduleName: "module_speed"
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
    this.traccarService.getOverspeed(deviceid,this.pagination).subscribe(res => {
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
        let attr = JSON.parse(this.httpResponse[i].attributes);
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
        this.httpResponse[i].speed = (attr.speed * 1.852).toFixed(2) + this.lang.instant('SPEED_PAGE.kmh');
        this.httpResponse[i].speedLimit = (attr.speedLimit * 1.852).toFixed(2) + this.lang.instant('SPEED_PAGE.kmh');
        this.dataList.push(this.httpResponse[i]);
      }
      this.pagination ++;
      this.item_name = this.current_item.name;
      this.item_icon = this.current_item.icon_name;
      
      this.overspeed_alert = this.current_item.speed_limit_notification;
      this.speed_limit = Math.round(this.current_item.speed_limit * 1.852);
      this.deviceid = this.current_item.deviceid;
      this.loading.dismiss();
    });
  }

  loadData(event) {

    this.traccarService.getOverspeed(this.deviceid,this.pagination).subscribe(res => {
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
        let attr = JSON.parse(this.httpResponse[i].attributes);
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

        this.httpResponse[i].speed = (attr.speed * 1.852).toFixed(2) + this.lang.instant('SPEED_PAGE.kmh');
        this.httpResponse[i].speedLimit = (attr.speedLimit * 1.852).toFixed(2) + this.lang.instant('SPEED_PAGE.kmh');

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

    return this.http.get(ENDPOINT.API_URL + 'event/overspeed/notification/' + type + '/' + deviceid + '/' + bool, { headers: headers })
    .pipe(
      tap(data => {
        return data;
      })
    );


  }

  preparingSpeedLimitRequest(deviceid, speed_limit){

    this.authService.getToken();
    let token = this.authService.token;

    const headers = new HttpHeaders({
      'Authorization': token["token_type"]+" "+token["access_token"]
    });

    return this.http.get(ENDPOINT.API_URL + 'event/overspeed/set-limit', { headers: headers, params : { deviceid: deviceid, speed_limit: speed_limit } })
    .pipe(
      tap(data => {
        return data;
      })
    );

  }

  toggleOverspeedAlert(ev: any){
    this.presentLoadingWithOptions();
    setTimeout(() => {
      this.preparingRequest('speed_limit_notification',this.deviceid,this.overspeed_alert).subscribe(
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

  onChange($event){
    this.presentLoadingWithOptions();
    let speed_limit = $event.target.value;

    this.preparingSpeedLimitRequest(this.deviceid, speed_limit).subscribe(
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

  }

  ionPickerHandler:any;
  async showBasicPicker(){
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
          name: 'Speed Limit',
          options: [
            { text: '1' + this.lang.instant('SPEED_PAGE.kmh'), value: 1 },
            { text: '2' + this.lang.instant('SPEED_PAGE.kmh'), value: 2 },
            { text: '3' + this.lang.instant('SPEED_PAGE.kmh'), value: 3 },
            { text: '4' + this.lang.instant('SPEED_PAGE.kmh'), value: 4 },
            { text: '5' + this.lang.instant('SPEED_PAGE.kmh'), value: 5 },
            { text: '6' + this.lang.instant('SPEED_PAGE.kmh'), value: 6 },
            { text: '7' + this.lang.instant('SPEED_PAGE.kmh'), value: 7 },
            { text: '8' + this.lang.instant('SPEED_PAGE.kmh'), value: 8 },
            { text: '9' + this.lang.instant('SPEED_PAGE.kmh'), value: 9 },
            { text: '10' + this.lang.instant('SPEED_PAGE.kmh'), value: 10 },
            { text: '11' + this.lang.instant('SPEED_PAGE.kmh'), value: 11 },
            { text: '12' + this.lang.instant('SPEED_PAGE.kmh'), value: 12 },
            { text: '13' + this.lang.instant('SPEED_PAGE.kmh'), value: 13 },
            { text: '14' + this.lang.instant('SPEED_PAGE.kmh'), value: 14 },
            { text: '15' + this.lang.instant('SPEED_PAGE.kmh'), value: 15 },
            { text: '16' + this.lang.instant('SPEED_PAGE.kmh'), value: 16 },
            { text: '17' + this.lang.instant('SPEED_PAGE.kmh'), value: 17 },
            { text: '18' + this.lang.instant('SPEED_PAGE.kmh'), value: 18 },
            { text: '19' + this.lang.instant('SPEED_PAGE.kmh'), value: 19 },
            { text: '20' + this.lang.instant('SPEED_PAGE.kmh'), value: 20 },
            { text: '21' + this.lang.instant('SPEED_PAGE.kmh'), value: 21 },
            { text: '22' + this.lang.instant('SPEED_PAGE.kmh'), value: 22 },
            { text: '23' + this.lang.instant('SPEED_PAGE.kmh'), value: 23 },
            { text: '24' + this.lang.instant('SPEED_PAGE.kmh'), value: 24 },
            { text: '25' + this.lang.instant('SPEED_PAGE.kmh'), value: 25 },
            { text: '26' + this.lang.instant('SPEED_PAGE.kmh'), value: 26 },
            { text: '27' + this.lang.instant('SPEED_PAGE.kmh'), value: 27 },
            { text: '28' + this.lang.instant('SPEED_PAGE.kmh'), value: 28 },
            { text: '29' + this.lang.instant('SPEED_PAGE.kmh'), value: 29 },
            { text: '30' + this.lang.instant('SPEED_PAGE.kmh'), value: 30 },
            { text: '31' + this.lang.instant('SPEED_PAGE.kmh'), value: 31 },
            { text: '32' + this.lang.instant('SPEED_PAGE.kmh'), value: 32 },
            { text: '33' + this.lang.instant('SPEED_PAGE.kmh'), value: 33 },
            { text: '34' + this.lang.instant('SPEED_PAGE.kmh'), value: 34 },
            { text: '35' + this.lang.instant('SPEED_PAGE.kmh'), value: 35 },
            { text: '36' + this.lang.instant('SPEED_PAGE.kmh'), value: 36 },
            { text: '37' + this.lang.instant('SPEED_PAGE.kmh'), value: 37 },
            { text: '38' + this.lang.instant('SPEED_PAGE.kmh'), value: 38 },
            { text: '39' + this.lang.instant('SPEED_PAGE.kmh'), value: 39 },
            { text: '40' + this.lang.instant('SPEED_PAGE.kmh'), value: 40 },
            { text: '41' + this.lang.instant('SPEED_PAGE.kmh'), value: 41 },
            { text: '42' + this.lang.instant('SPEED_PAGE.kmh'), value: 42 },
            { text: '43' + this.lang.instant('SPEED_PAGE.kmh'), value: 43 },
            { text: '44' + this.lang.instant('SPEED_PAGE.kmh'), value: 44 },
            { text: '45' + this.lang.instant('SPEED_PAGE.kmh'), value: 45 },
            { text: '46' + this.lang.instant('SPEED_PAGE.kmh'), value: 46 },
            { text: '47' + this.lang.instant('SPEED_PAGE.kmh'), value: 47 },
            { text: '48' + this.lang.instant('SPEED_PAGE.kmh'), value: 48 },
            { text: '49' + this.lang.instant('SPEED_PAGE.kmh'), value: 49 },
            { text: '50' + this.lang.instant('SPEED_PAGE.kmh'), value: 50 },
            { text: '51' + this.lang.instant('SPEED_PAGE.kmh'), value: 51 },
            { text: '52' + this.lang.instant('SPEED_PAGE.kmh'), value: 52 },
            { text: '53' + this.lang.instant('SPEED_PAGE.kmh'), value: 53 },
            { text: '54' + this.lang.instant('SPEED_PAGE.kmh'), value: 54 },
            { text: '55' + this.lang.instant('SPEED_PAGE.kmh'), value: 55 },
            { text: '56' + this.lang.instant('SPEED_PAGE.kmh'), value: 56 },
            { text: '57' + this.lang.instant('SPEED_PAGE.kmh'), value: 57 },
            { text: '58' + this.lang.instant('SPEED_PAGE.kmh'), value: 58 },
            { text: '59' + this.lang.instant('SPEED_PAGE.kmh'), value: 59 },
            { text: '60' + this.lang.instant('SPEED_PAGE.kmh'), value: 60 },
            { text: '61' + this.lang.instant('SPEED_PAGE.kmh'), value: 61 },
            { text: '62' + this.lang.instant('SPEED_PAGE.kmh'), value: 62 },
            { text: '63' + this.lang.instant('SPEED_PAGE.kmh'), value: 63 },
            { text: '64' + this.lang.instant('SPEED_PAGE.kmh'), value: 64 },
            { text: '65' + this.lang.instant('SPEED_PAGE.kmh'), value: 65 },
            { text: '66' + this.lang.instant('SPEED_PAGE.kmh'), value: 66 },
            { text: '67' + this.lang.instant('SPEED_PAGE.kmh'), value: 67 },
            { text: '68' + this.lang.instant('SPEED_PAGE.kmh'), value: 68 },
            { text: '69' + this.lang.instant('SPEED_PAGE.kmh'), value: 69 },
            { text: '70' + this.lang.instant('SPEED_PAGE.kmh'), value: 70 },
            { text: '71' + this.lang.instant('SPEED_PAGE.kmh'), value: 71 },
            { text: '72' + this.lang.instant('SPEED_PAGE.kmh'), value: 72 },
            { text: '73' + this.lang.instant('SPEED_PAGE.kmh'), value: 73 },
            { text: '74' + this.lang.instant('SPEED_PAGE.kmh'), value: 74 },
            { text: '75' + this.lang.instant('SPEED_PAGE.kmh'), value: 75 },
            { text: '76' + this.lang.instant('SPEED_PAGE.kmh'), value: 76 },
            { text: '77' + this.lang.instant('SPEED_PAGE.kmh'), value: 77 },
            { text: '78' + this.lang.instant('SPEED_PAGE.kmh'), value: 78 },
            { text: '79' + this.lang.instant('SPEED_PAGE.kmh'), value: 79 },
            { text: '80' + this.lang.instant('SPEED_PAGE.kmh'), value: 80 },
            { text: '81' + this.lang.instant('SPEED_PAGE.kmh'), value: 81 },
            { text: '82' + this.lang.instant('SPEED_PAGE.kmh'), value: 82 },
            { text: '83' + this.lang.instant('SPEED_PAGE.kmh'), value: 83 },
            { text: '84' + this.lang.instant('SPEED_PAGE.kmh'), value: 84 },
            { text: '85' + this.lang.instant('SPEED_PAGE.kmh'), value: 85 },
            { text: '86' + this.lang.instant('SPEED_PAGE.kmh'), value: 86 },
            { text: '87' + this.lang.instant('SPEED_PAGE.kmh'), value: 87 },
            { text: '88' + this.lang.instant('SPEED_PAGE.kmh'), value: 88 },
            { text: '89' + this.lang.instant('SPEED_PAGE.kmh'), value: 89 },
            { text: '90' + this.lang.instant('SPEED_PAGE.kmh'), value: 90 },
            { text: '91' + this.lang.instant('SPEED_PAGE.kmh'), value: 91 },
            { text: '92' + this.lang.instant('SPEED_PAGE.kmh'), value: 92 },
            { text: '93' + this.lang.instant('SPEED_PAGE.kmh'), value: 93 },
            { text: '94' + this.lang.instant('SPEED_PAGE.kmh'), value: 94 },
            { text: '95' + this.lang.instant('SPEED_PAGE.kmh'), value: 95 },
            { text: '96' + this.lang.instant('SPEED_PAGE.kmh'), value: 96 },
            { text: '97' + this.lang.instant('SPEED_PAGE.kmh'), value: 97 },
            { text: '98' + this.lang.instant('SPEED_PAGE.kmh'), value: 98 },
            { text: '99' + this.lang.instant('SPEED_PAGE.kmh'), value: 99 },
            { text: '100' + this.lang.instant('SPEED_PAGE.kmh'), value: 100 },
            { text: '101' + this.lang.instant('SPEED_PAGE.kmh'), value: 101 },
            { text: '102' + this.lang.instant('SPEED_PAGE.kmh'), value: 102 },
            { text: '103' + this.lang.instant('SPEED_PAGE.kmh'), value: 103 },
            { text: '104' + this.lang.instant('SPEED_PAGE.kmh'), value: 104 },
            { text: '105' + this.lang.instant('SPEED_PAGE.kmh'), value: 105 },
            { text: '106' + this.lang.instant('SPEED_PAGE.kmh'), value: 106 },
            { text: '107' + this.lang.instant('SPEED_PAGE.kmh'), value: 107 },
            { text: '108' + this.lang.instant('SPEED_PAGE.kmh'), value: 108 },
            { text: '109' + this.lang.instant('SPEED_PAGE.kmh'), value: 109 },
            { text: '110' + this.lang.instant('SPEED_PAGE.kmh'), value: 110 },
            { text: '111' + this.lang.instant('SPEED_PAGE.kmh'), value: 111 },
            { text: '112' + this.lang.instant('SPEED_PAGE.kmh'), value: 112 },
            { text: '113' + this.lang.instant('SPEED_PAGE.kmh'), value: 113 },
            { text: '114' + this.lang.instant('SPEED_PAGE.kmh'), value: 114 },
            { text: '115' + this.lang.instant('SPEED_PAGE.kmh'), value: 115 },
            { text: '116' + this.lang.instant('SPEED_PAGE.kmh'), value: 116 },
            { text: '117' + this.lang.instant('SPEED_PAGE.kmh'), value: 117 },
            { text: '118' + this.lang.instant('SPEED_PAGE.kmh'), value: 118 },
            { text: '119' + this.lang.instant('SPEED_PAGE.kmh'), value: 119 },
            { text: '120' + this.lang.instant('SPEED_PAGE.kmh'), value: 120 },
            { text: '121' + this.lang.instant('SPEED_PAGE.kmh'), value: 121 },
            { text: '122' + this.lang.instant('SPEED_PAGE.kmh'), value: 122 },
            { text: '123' + this.lang.instant('SPEED_PAGE.kmh'), value: 123 },
            { text: '124' + this.lang.instant('SPEED_PAGE.kmh'), value: 124 },
            { text: '125' + this.lang.instant('SPEED_PAGE.kmh'), value: 125 },
            { text: '126' + this.lang.instant('SPEED_PAGE.kmh'), value: 126 },
            { text: '127' + this.lang.instant('SPEED_PAGE.kmh'), value: 127 },
            { text: '128' + this.lang.instant('SPEED_PAGE.kmh'), value: 128 },
            { text: '129' + this.lang.instant('SPEED_PAGE.kmh'), value: 129 },
            { text: '130' + this.lang.instant('SPEED_PAGE.kmh'), value: 130 },
            { text: '131' + this.lang.instant('SPEED_PAGE.kmh'), value: 131 },
            { text: '132' + this.lang.instant('SPEED_PAGE.kmh'), value: 132 },
            { text: '133' + this.lang.instant('SPEED_PAGE.kmh'), value: 133 },
            { text: '134' + this.lang.instant('SPEED_PAGE.kmh'), value: 134 },
            { text: '135' + this.lang.instant('SPEED_PAGE.kmh'), value: 135 },
            { text: '136' + this.lang.instant('SPEED_PAGE.kmh'), value: 136 },
            { text: '137' + this.lang.instant('SPEED_PAGE.kmh'), value: 137 },
            { text: '138' + this.lang.instant('SPEED_PAGE.kmh'), value: 138 },
            { text: '139' + this.lang.instant('SPEED_PAGE.kmh'), value: 139 },
            { text: '140' + this.lang.instant('SPEED_PAGE.kmh'), value: 140 },
            { text: '141' + this.lang.instant('SPEED_PAGE.kmh'), value: 141 },
            { text: '142' + this.lang.instant('SPEED_PAGE.kmh'), value: 142 },
            { text: '143' + this.lang.instant('SPEED_PAGE.kmh'), value: 143 },
            { text: '144' + this.lang.instant('SPEED_PAGE.kmh'), value: 144 },
            { text: '145' + this.lang.instant('SPEED_PAGE.kmh'), value: 145 },
            { text: '146' + this.lang.instant('SPEED_PAGE.kmh'), value: 146 },
            { text: '147' + this.lang.instant('SPEED_PAGE.kmh'), value: 147 },
            { text: '148' + this.lang.instant('SPEED_PAGE.kmh'), value: 148 },
            { text: '149' + this.lang.instant('SPEED_PAGE.kmh'), value: 149 },
            { text: '150' + this.lang.instant('SPEED_PAGE.kmh'), value: 150 },
            { text: '151' + this.lang.instant('SPEED_PAGE.kmh'), value: 151 },
            { text: '152' + this.lang.instant('SPEED_PAGE.kmh'), value: 152 },
            { text: '153' + this.lang.instant('SPEED_PAGE.kmh'), value: 153 },
            { text: '154' + this.lang.instant('SPEED_PAGE.kmh'), value: 154 },
            { text: '155' + this.lang.instant('SPEED_PAGE.kmh'), value: 155 },
            { text: '156' + this.lang.instant('SPEED_PAGE.kmh'), value: 156 },
            { text: '157' + this.lang.instant('SPEED_PAGE.kmh'), value: 157 },
            { text: '158' + this.lang.instant('SPEED_PAGE.kmh'), value: 158 },
            { text: '159' + this.lang.instant('SPEED_PAGE.kmh'), value: 159 },
            { text: '160' + this.lang.instant('SPEED_PAGE.kmh'), value: 160 },
            { text: '161' + this.lang.instant('SPEED_PAGE.kmh'), value: 161 },
            { text: '162' + this.lang.instant('SPEED_PAGE.kmh'), value: 162 },
            { text: '163' + this.lang.instant('SPEED_PAGE.kmh'), value: 163 },
            { text: '164' + this.lang.instant('SPEED_PAGE.kmh'), value: 164 },
            { text: '165' + this.lang.instant('SPEED_PAGE.kmh'), value: 165 },
            { text: '166' + this.lang.instant('SPEED_PAGE.kmh'), value: 166 },
            { text: '167' + this.lang.instant('SPEED_PAGE.kmh'), value: 167 },
            { text: '168' + this.lang.instant('SPEED_PAGE.kmh'), value: 168 },
            { text: '169' + this.lang.instant('SPEED_PAGE.kmh'), value: 169 },
            { text: '170' + this.lang.instant('SPEED_PAGE.kmh'), value: 170 },
            { text: '171' + this.lang.instant('SPEED_PAGE.kmh'), value: 171 },
            { text: '172' + this.lang.instant('SPEED_PAGE.kmh'), value: 172 },
            { text: '173' + this.lang.instant('SPEED_PAGE.kmh'), value: 173 },
            { text: '174' + this.lang.instant('SPEED_PAGE.kmh'), value: 174 },
            { text: '175' + this.lang.instant('SPEED_PAGE.kmh'), value: 175 },
            { text: '176' + this.lang.instant('SPEED_PAGE.kmh'), value: 176 },
            { text: '177' + this.lang.instant('SPEED_PAGE.kmh'), value: 177 },
            { text: '178' + this.lang.instant('SPEED_PAGE.kmh'), value: 178 },
            { text: '179' + this.lang.instant('SPEED_PAGE.kmh'), value: 179 },
            { text: '180' + this.lang.instant('SPEED_PAGE.kmh'), value: 180 },
            { text: '181' + this.lang.instant('SPEED_PAGE.kmh'), value: 181 },
            { text: '182' + this.lang.instant('SPEED_PAGE.kmh'), value: 182 },
            { text: '183' + this.lang.instant('SPEED_PAGE.kmh'), value: 183 },
            { text: '184' + this.lang.instant('SPEED_PAGE.kmh'), value: 184 },
            { text: '185' + this.lang.instant('SPEED_PAGE.kmh'), value: 185 },
            { text: '186' + this.lang.instant('SPEED_PAGE.kmh'), value: 186 },
            { text: '187' + this.lang.instant('SPEED_PAGE.kmh'), value: 187 },
            { text: '188' + this.lang.instant('SPEED_PAGE.kmh'), value: 188 },
            { text: '189' + this.lang.instant('SPEED_PAGE.kmh'), value: 189 },
            { text: '190' + this.lang.instant('SPEED_PAGE.kmh'), value: 190 },
            { text: '191' + this.lang.instant('SPEED_PAGE.kmh'), value: 191 },
            { text: '192' + this.lang.instant('SPEED_PAGE.kmh'), value: 192 },
            { text: '193' + this.lang.instant('SPEED_PAGE.kmh'), value: 193 },
            { text: '194' + this.lang.instant('SPEED_PAGE.kmh'), value: 194 },
            { text: '195' + this.lang.instant('SPEED_PAGE.kmh'), value: 195 },
            { text: '196' + this.lang.instant('SPEED_PAGE.kmh'), value: 196 },
            { text: '197' + this.lang.instant('SPEED_PAGE.kmh'), value: 197 },
            { text: '198' + this.lang.instant('SPEED_PAGE.kmh'), value: 198 },
            { text: '199' + this.lang.instant('SPEED_PAGE.kmh'), value: 199 },
            { text: '200' + this.lang.instant('SPEED_PAGE.kmh'), value: 200 },
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
      let col = await picker.getColumn('Speed Limit');
      this.speed_limit = col.options[col.selectedIndex].value;

      this.preparingSpeedLimitRequest(this.deviceid, this.speed_limit).subscribe(
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
      s += '0' + d.getHours().toString();
    }
    else{
      s += d.getHours().toString();
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
