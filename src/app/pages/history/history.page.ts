import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Platform, NavController, PopoverController, LoadingController, ModalController } from "@ionic/angular";
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';
import { ENDPOINT } from '../../../environments/environment';
import { HistoryDatePickerPage } from './../history-date-picker/history-date-picker.page';
import { StorageService } from 'src/app/services/storage.service';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator/ngx';

import { SelectDevicePage } from '../select-device/select-device.page';
import { TranslateService } from '@ngx-translate/core';


declare var google;
declare var InfoBox;
declare var $: any;

import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  Marker,
  HtmlInfoWindow,
  BaseArrayClass,
  LatLng,
  MarkerIcon,
  GoogleMapOptions,
  Polyline,
  GoogleMapsMapTypeId,
  ILatLng
} from '@ionic-native/google-maps';


@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {
  @ViewChild('history_map', { static: true }) mapElement: ElementRef;

  loading;

  map: GoogleMap = null;
  marker: Marker;
  markers = [];
  isTracking = false;
  watch: string;
  user = null;


  rangeStart = 0;
  rangeStop = 0;
  rangeCurrent = 0;


  isPlayed = false;
  isRepeat = false;


  historyJson :any;


  deltaConst = 50;
  numDeltas = 0;
  delay = 1000; //milliseconds
  inc = 0;
  deltaLat;
  deltaLng;
  position = [];


  playerSpeed = 1;


  infoWindow;

  currentFixtime = '';

  infoBox;

  from = '';
  to = '';

  selectedItems;

  distance;

  current_item;
  deviceIcon;
  deviceIconSize;
  devicePlateNumber;

  parkingJson = [];
  
  
  statusColor = {
    "deviceOnline":"#00a850",
    "deviceOffline":"#db3d2c",
    "deviceMoving":"#1877f2",
    "deviceStopped":"#db3d2c",
    "deviceUnknown":"#111111",
    "deviceOverspeed":"#db3d2c",
    "ignitionOn":"#00a850",
    "ignitionOff":"#db3d2c"
  };
  statusText = {
    "deviceOnline":"online",
    "deviceOffline":"offline",
    "deviceMoving":"moving",
    "deviceStopped":"stopped",
    "deviceUnknown":"unknown",
    "deviceOverspeed":"overspeed",
    "ignitionOn":"engine_on",
    "ignitionOff":"engine_off"
  };
  
  ignitionStatus = {
    "true":"on",
    "false":"off",
    "on":"on",
    "off":"off"
  }

  constructor(
    private launchNavigator: LaunchNavigator,
    private http: HttpClient,
    private navCtrl: NavController,
    private popoverController: PopoverController,
    private authService: AuthService,
    public platform: Platform,
    private loadingController: LoadingController,
    private lang: TranslateService,
    private storageService: StorageService,
    private modalController: ModalController
  ) {
    this.numDeltas = this.deltaConst;
  }

  ionViewWillEnter()
  {

  }

  async ngOnInit() {
    this.presentLoading();
    await this.platform.ready();
    await this.loadMap();
  }


  ionViewDidLeave(){
    this.isPlayed = false;
  }

 
  loadMap()
  { 
     

    this.map = GoogleMaps.create('map_canvas', {
      camera: {
        target: {
          lat: 11.5560777,
          lng: 104.8941368
        },
        zoom: 7,
        // tilt: 30
      },
      preferences: {
        zoom: {
          minZoom: 6,
          maxZoom: 18
        },
        building: true
      },
      controls: {
        compass: false,
      },
      gestures: {
        rotate: false
      }
    });
    this.map.one(GoogleMapsEvent.MAP_READY).then(()=>{
      // Get Current Item from Storage
      this.storageService.setItem().subscribe(res => {
        this.current_item = this.storageService.current_item;
        this.deviceIcon =  this.current_item.icon_name;
        this.deviceIconSize =  this.current_item.icon_size;
        this.devicePlateNumber = this.current_item.plate;
        console.log("current_item");
        console.log(this.current_item);
      },(err) => {
        console.log(err);
      }, () => {

        this.init().subscribe(data => {
            let response:any = data;
            this.historyJson = response.positions;
            this.parkingJson = JSON.parse(response.parking);
            this.rangeStop = this.historyJson.length;
          },error => {
            console.log(error);
            this.loading.dismiss();
          },
          () => {
            if(this.rangeStop > 0){   
              this.getData(); 
            }
            else{
              alert("No data");
            }
            this.loading.dismiss();
          }
        );


      });
    });

  }

  drivePath:Polyline = null;
  startMarker: Marker;
  finishMarker: Marker;
  parkingMarker:any[] = [];
  getData(){

    let driveCoordinates = [];

    let i = 0;
    this.historyJson.forEach(element => {
      driveCoordinates[i] = { "lat": element.latitude, "lng": element.longitude };
      i++;
    });

    this.map.setOptions({
      camera: {
        target: driveCoordinates
      }
    });
      
    if(this.drivePath != null)
    {
      // this.drivePath.setPoints(this.driveCoordinates);
      this.drivePath.remove();
      this.drivePath = null;

      this.marker.remove();
      this.marker = null;
    }
    if( this.parkingMarker.length > 0 ){
      for( let i = 0; i < this.parkingMarker.length; i++ )
      {
        this.parkingMarker[i].remove();
      }
    }
    if( this.startMarker != null )
    {
      this.startMarker.remove();
      this.startMarker = null;
    }
    if( this.finishMarker != null )
    {
      this.finishMarker.remove();
      this.finishMarker = null;
    }

    for( let i = 0; i < this.parkingJson.length; i++ )
    {
      if( this.showParkSign )
      {
        let parkingIcon: MarkerIcon = {
          url: 'assets/google/marker/park-sign.png',
          size: {
            width: 40,
            height: 57
          }
        };
        let parking: Marker = this.map.addMarkerSync({
          icon: parkingIcon,
          position: {
            lat: this.parkingJson[i].latitude,
            lng: this.parkingJson[i].longitude
          },
        });
        this.parkingMarker.push(parking);
      }
    }
      
    this.drivePath = this.map.addPolylineSync({
      points: driveCoordinates,
      color: '#1877f2',
      width: 5,
      geodesic: true,
    });


    let icon: MarkerIcon = {
      url: 'assets/google/marker/' + this.current_item.icon_name + '/0.png',
      size: {
        width: this.deviceIconSize,
        height: this.deviceIconSize
      }
    };
    this.marker = this.map.addMarkerSync({
      icon: icon,
      position: {
        lat: this.historyJson[0].latitude,
        lng: this.historyJson[0].longitude
      },
    });
    this.marker.setIconAnchor(this.deviceIconSize/2, this.deviceIconSize/2);

    if( !this.showParkSign )
    {
      let startIcon: MarkerIcon = {
        url: 'assets/google/marker/start-sign.png',
        size: {
          width: 40,
          height: 57
        }
      };
      this.startMarker = this.map.addMarkerSync({
        icon: startIcon,
        position: {
          lat: this.historyJson[0].latitude,
          lng: this.historyJson[0].longitude
        },
      });
    }


    if( !this.showParkSign )
    {
      let countHistoryJson = this.historyJson.length - 1;
      let finishIcon: MarkerIcon = {
        url: 'assets/google/marker/stop-sign.png',
        size: {
          width: 40,
          height: 57
        }
      };
      this.finishMarker = this.map.addMarkerSync({
        icon: finishIcon,
        position: {
          lat: this.historyJson[countHistoryJson].latitude,
          lng: this.historyJson[countHistoryJson].longitude
        },
      });
    }


    let traccar_attributes = JSON.parse(this.historyJson[this.rangeCurrent].attributes);
    // let traccar_event = this.httpResponse.event;

    let traccar_status = '';
    let traccar_status_color = '';
    let traccar_speed = (Math.abs( this.historyJson[this.rangeCurrent].speed * 1.852 )).toFixed(2) + this.lang.instant('APP.kmh') + '&nbsp;';
    let traccar_battery = Math.abs(traccar_attributes["batteryLevel"]);
    let traccar_ignition = this.lang.instant('APP.' + this.ignitionStatus[traccar_attributes["ignition"]]);
    let traccar_trip = (traccar_attributes["totalDistance"]/1000).toFixed(2) + this.lang.instant('APP.km');
    let traccar_hours = (traccar_attributes["hours"]/3.6e+6).toFixed(2) + this.lang.instant('APP.h');
    let traccar_date = this.readableLocalDate2(this.historyJson[this.rangeCurrent].fixtime) + ' ' + this.readableLocalTime2(this.historyJson[this.rangeCurrent].fixtime);
    
    let battery_spite = this.checkMyBatterySprite( traccar_battery );
    this.distance = '0' + this.lang.instant('APP.km');

    this.currentFixtime = traccar_date;
    this.position = [this.historyJson[this.rangeCurrent].latitude, this.historyJson[this.rangeCurrent].longitude];
    this.rangeCurrent ++;
  }
 

  init( from = "", to = "" ){

    if( from == '' ){
      from = this.getTodayDateString().from;
    }
    if( to == '' ){
      to = this.getTodayDateString().to;
    }
    this.from = from;
    this.to = to;

    this.authService.getToken();
    let token = this.authService.token;

    const headers = new HttpHeaders({
      'Authorization': token["token_type"]+" "+token["access_token"]
    });

    let deviceid = this.current_item.deviceid;

    return this.http.get(ENDPOINT.API_URL + 'item/route-history', { headers: headers, params: { from: from, to: to, deviceid }})
    .pipe(
      tap(data => {
        return data;
      })
    );
  }


  getTodayDateString()
  {
    let today = new Date();

    let from_date_str:any = today.getFullYear();
    from_date_str += '-';
    if( (today.getMonth()+1) < 10 ){
      from_date_str +=  '0' + (today.getMonth()+1).toString();
    }
    else{
      from_date_str += (today.getMonth()+1).toString();
    }

    from_date_str += '-';
    if( today.getDate() < 10 ){
      from_date_str +=  '0' + today.getDate().toString();
    }
    else{
      from_date_str += today.getDate().toString();
    }
    from_date_str += ' 00:00:00';


    let to_date_str:any = today.getFullYear(); // + '-' + (today.getMonth() + 1) + '-' + today.getDate() + ' ' + today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
    to_date_str += '-';
    if( (today.getMonth()+1) < 10 ){
      to_date_str +=  '0' + (today.getMonth()+1).toString();
    }
    else{
      to_date_str += (today.getMonth()+1).toString();
    }

    to_date_str += '-';
    if( today.getDate() < 10 ){
      to_date_str +=  '0' + today.getDate().toString();
    }
    else{
      to_date_str += today.getDate().toString();
    }
    
    to_date_str += ' ';
    if( today.getHours() < 10 ){
      to_date_str += '0' + today.getHours().toString();
    }
    else{
      to_date_str += today.getHours().toString();
    }

    to_date_str += ':';
    if( today.getMinutes() < 10 ){
      to_date_str += '0' + today.getMinutes().toString();
    }
    else{
      to_date_str += today.getMinutes().toString();
    }

    to_date_str += ':';
    if( today.getSeconds() < 10 ){
      to_date_str += '0' + today.getSeconds().toString();
    }
    else{
      to_date_str += today.getSeconds().toString();
    }
    let today_string = { from: from_date_str, to: to_date_str };
    return today_string;
  }

  


  play(){
    this.isPlayed = !this.isPlayed;
    this.recursiveExec();

    if(this.rangeCurrent == this.rangeStop)
    {
      this.isRepeat = false;
      this.rangeCurrent = 0;
    }
  }

  recursiveExec()
  {
    if(this.rangeCurrent >= this.rangeStop)
    {
      this.isRepeat = true;
      this.isPlayed = !this.isPlayed;
      return;
    }
    let deg = this.getHeadingDegree( this.position[0], this.position[1], this.historyJson[this.rangeCurrent].latitude, this.historyJson[this.rangeCurrent].longitude );

    if( deg != 0 && deg != 360 )
      this.marker.setRotation(deg);

    let traccar_attributes = JSON.parse(this.historyJson[this.rangeCurrent].attributes);
    // let traccar_event = this.httpResponse.event;

    let traccar_status = '';
    let traccar_status_color = '';
    let traccar_speed = (Math.abs( this.historyJson[this.rangeCurrent].speed * 1.852 )).toFixed(2) + this.lang.instant('APP.kmh') + '&nbsp;';
    let traccar_battery = Math.abs(traccar_attributes["batteryLevel"]);
    let traccar_ignition = this.lang.instant('APP.' + this.ignitionStatus[traccar_attributes["ignition"]]);
    let traccar_trip = (traccar_attributes["totalDistance"]/1000).toFixed(2) + this.lang.instant('APP.km');
    let traccar_hours = (traccar_attributes["hours"]/3.6e+6).toFixed(2) + this.lang.instant('APP.h');
    let traccar_date = this.readableLocalDate2(this.historyJson[this.rangeCurrent].fixtime) + ' ' + this.readableLocalTime2(this.historyJson[this.rangeCurrent].fixtime);
    
    let battery_spite = this.checkMyBatterySprite( traccar_battery );
    this.distance = '0' + this.lang.instant('APP.km');

    let infoBoxContent = '<div style="font-size:1.25em;opacity:0.90;border:1px solid rgba(119,119,119,0.75);border-radius:15px;height:'+this.lang.instant('APP.GeolocationInfoBoxHeight')+';background-color:#fff"><div style="float:left;padding:7px 0px 5px 7px;">'+traccar_date+'</div><div style="float:right;padding:4px 7px 5px 0px;"><div style="background-color:' + traccar_status_color + ';color:#fff;padding:2px 5px; border-radius: 5px;">' + this.lang.instant('APP.'+traccar_status) + '</div></div><div style="border-bottom:1px solid rgba(119,119,119,0.75);clear:both;"></div><div style="width:48%;float:left;padding: 7px 0px 0px 7px;"><div style="width:auto;float:left"><div style="padding:1px 0px;color:#1877f2;">'+ this.lang.instant('APP.battery') + '</div><div style="padding:1px 0px;color:#1877f2;">'+ this.lang.instant('APP.ignition') +' </div><div style="padding:1px 0px;color:#1877f2;">'+ this.lang.instant('APP.speed') +'</div></div><div style="float:right;width:auto;"> <div style="padding:1px 0px;color:#fff;"><div style="'+this.lang.instant('APP.GeolocationInfoBoxBatteryHeight')+'width:48px;font-size:1em;background:url(assets/google/battery/'+ battery_spite +') no-repeat;text-align:center;color:#111;">'+traccar_battery+'%</div></div> <div style="padding:1px 0px;color:#333;">'+traccar_ignition+'</div> <div style="padding:1px 0px;color:#333;">'+traccar_speed+'</div> </div></div><div style="float:left;width:4%;">&nbsp;</div><div style="width:48%;float:left;padding:7px 7px 0px 0px;"><div style="float:left;"><div style="padding:1px 0px;color:#1877f2;">'+ this.lang.instant('APP.distance') +'</div><div style="padding:1px 0px;color:#1877f2;">'+this.lang.instant('APP.hours')+'</div><div style="padding:1px 0px;color:#1877f2;">'+this.lang.instant('APP.trip')+'</div></div><div style="float:right;"><div style="padding:1px 0px;color:#333;">'+this.distance+'</div><div style="padding:1px 0px;color:#333;">'+traccar_hours+'</div><div style="padding:1px 0px;color:#333;">'+traccar_trip+'</div></div></div><div style="clear:both;"></div></div>'  
      +  '<div style="width: 0px; height: 0px; border-style: solid; margin: auto; border-width: 12px 7px 0 7px; border-color: #333 transparent transparent transparent; line-height: 0px;"></div>';


    this.marker.setPosition( { lat: this.position[0], lng: this.position[1] } );
    this.transition([this.historyJson[this.rangeCurrent].latitude, this.historyJson[this.rangeCurrent].longitude]);
  }


  private readableLocalDate2( the_date )
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
    s = '';
    if( d.getDate() < 10 ){
      s += '0' + d.getDate().toString();
    }
    else{
      s += d.getDate().toString();
    }
    s += '/' +  this.lang.instant('APP.' + monthNames[d.getMonth()] );
    s += '/' +  d.getFullYear();
    return s;
  }

  private readableLocalTime2( the_date )
  {
    let d:Date;
    if(this.platform.is('ios')){
      d = new Date( the_date.replace(' ', 'T'));
    }
    else{
      d = new Date( the_date + ' UTC');
    }
    
    let s = '[';
    if( d.getHours() < 10 ){
      s += '' + '0' + d.getHours().toString();
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
    
    return s + ']';
  }


  private checkMyBatterySprite(traccar_battery){
    let battery_spite = '50.png';
    if( traccar_battery > 90 )
      battery_spite = '100.png';
    else if( traccar_battery > 80 )
      battery_spite = '90.png';
    else if( traccar_battery > 70 )
      battery_spite = '80.png';
    else if( traccar_battery > 60 )
      battery_spite = '70.png';
    else if( traccar_battery > 50 )
      battery_spite = '60.png';
    else if( traccar_battery > 40 )
      battery_spite = '50.png';
    else if( traccar_battery > 30 )
      battery_spite = '40.png';
    else if( traccar_battery > 20 )
      battery_spite = '30.png';
    else if( traccar_battery > 10 )
      battery_spite = '20.png';
    else if( traccar_battery > 1 )
      battery_spite = '10.png';
    else
      battery_spite = '0.png';
    return battery_spite;
  }


  goBack(){
    this.navCtrl.navigateBack('dashboard/tabs/home');
  }


  transition(result){
    this.inc = 0;
    this.deltaLat = (result[0] - this.position[0])/this.numDeltas;
    this.deltaLng = (result[1] - this.position[1])/this.numDeltas;
    this.moveMarker();
  }


  moveMarker(){
    // if(this.isPlayed){

      // console.log("moveMarker is running");
      this.position[0] += this.deltaLat;
      this.position[1] += this.deltaLng;
      
      this.marker.setPosition( { lat: this.position[0], lng: this.position[1] } );

      if( this.inc < this.numDeltas && this.isPlayed )
      {
          this.inc++;
          setTimeout(()=>{ this.moveMarker(), this.delay });
      }
      else
      {
        this.position = [this.historyJson[this.rangeCurrent].latitude, this.historyJson[this.rangeCurrent].longitude];
        this.rangeCurrent++;
        if( this.isPlayed )
        {
          this.recursiveExec();
        }
        let traccar_date = this.readableLocalDate2(this.historyJson[this.rangeCurrent].fixtime) + ' ' + this.readableLocalTime2(this.historyJson[this.rangeCurrent].fixtime);
        this.currentFixtime = traccar_date;
      }

    // }
  }


  getHeadingDegree(lat1, lon1, lat2, lon2)
  {
    // console.log("getHeadingDegree is running");
    lat1 = lat1 * Math.PI / 180;
    lat2 = lat2 * Math.PI / 180;
    let dLon = (lon2 - lon1) * Math.PI / 180;
    let y = Math.sin(dLon) * Math.cos(lat2);
    let x = Math.cos(lat1) * Math.sin(lat2) - Math.sin(lat1) * Math.cos(lat2) * Math.cos(dLon);
    var brng = Math.atan2(y, x);
    return (((brng * 180 / Math.PI) + 360) % 360);
  }



  isEnabledIncBtn = true;
  increasePlayerSpeed(){
    if( this.isEnabledIncBtn ){
      switch( this.playerSpeed )
      {
        case 1:
          this.playerSpeed = 2;
          break;
        case 2:
          this.playerSpeed = 4;
          break;
        case 4:
          this.playerSpeed = 8;
          break;
        case 8:
          this.playerSpeed = 16;
          break;
        default:
          this.playerSpeed = 1;
          break;
      }
      this.numDeltas = Math.abs(this.deltaConst / this.playerSpeed);
      this.checkEnabler();
    }
  }


  isEnabledDecBtn = false;
  decreasePlayerSpeed(){
    if( this.isEnabledDecBtn ){
      switch( this.playerSpeed )
      {
        case 16:
          this.playerSpeed = 8;
          break;
        case 8:
          this.playerSpeed = 4;
          break;
        case 4:
          this.playerSpeed = 2;
          break;
        case 2:
          this.playerSpeed = 1;
          break;
        default:
          this.playerSpeed = 1;
          break;
      }
      this.numDeltas = Math.abs(this.deltaConst / this.playerSpeed);
      this.checkEnabler();
    }
  }


  checkEnabler(){
    if( this.playerSpeed == 1 ){
      this.isEnabledDecBtn = false;
      this.isEnabledIncBtn = true;
    }
    else if( this.playerSpeed == 16 ){
      this.isEnabledDecBtn = true;
      this.isEnabledIncBtn = false;
    }
    else{
      this.isEnabledDecBtn = true;
      this.isEnabledIncBtn = true;
    }
  }

  isInfoWindowOpen(){
    let map = this.infoBox.getMap();
    return (map !== null && typeof map !== "undefined");
  }


  readableLocalDate()
  {
    // let dateString = "2015-12-31 00:00:00+000";
    // let td = new Date(dateString);
    // console.log(td.getDay());

    let d:Date;
    if(this.platform.is('ios')){
      d = new Date( (this.historyJson[this.rangeCurrent].fixtime).replace(' ', 'T'));
    }
    else{
      d = new Date( this.historyJson[this.rangeCurrent].fixtime + ' UTC');
    }

    let dayNames = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    let monthNames = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];
    let s = 'ថ្ងៃ';
    s += dayNames[d.getDay()];
    if( d.getDate() < 10 ){
      s += ' ទី0' + d.getDate().toString();
    }
    else{
      s += ' ទី' + d.getDate().toString();
    }
    s += ' ខែ' + monthNames[d.getMonth()];
    s += ' ឆ្នាំ' + d.getFullYear();
    if( d.getHours() < 10 ){
      s += ' ម៉ោង0' + d.getHours().toString();
    }
    else{
      s += ' ម៉ោង' + d.getHours().toString();
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
  
  async changeDatePopOver(ev: any) {
    const popover = await this.popoverController.create({
      component: HistoryDatePickerPage,
      event: ev,
      translucent: true
    });

    popover.onDidDismiss().then(res=>{
      console.log(res);
      if(res.data == null)
      return;
      
      this.presentLoading();
      let onDidDismissData = res;
      this.from = onDidDismissData.data.date_string.from;
      this.to = onDidDismissData.data.date_string.to;
      this.init( onDidDismissData.data.date_string.from, onDidDismissData.data.date_string.to ).subscribe(
        data => {
          this.rangeStart = 0;
          this.rangeStop = 0;
          this.rangeCurrent = 0;

          this.isPlayed = false;
          this.isRepeat = false;
          this.loadingController.dismiss();

          let response:any = data;
          this.historyJson = response.positions;
          this.parkingJson = JSON.parse(response.parking);
          this.rangeStop = this.historyJson.length;
        },error => {
          console.log(error);
          this.loadingController.dismiss();
        },
        () => {
          if(this.rangeStop > 0){   
            this.getData();
          }
          else{
            alert("No data");
          }
          this.loadingController.dismiss();
        }
      );

    }).catch(err=>{
      console.log(err);
    });


    return await popover.present();
  }




  async presentLoading() {
    this.loading = await this.loadingController.create({
      message: 'Please wait',
      duration: 60000
    });
    await this.loading.present();
  }

  async selectDevice()
  {
    const assignItemModal = await this.modalController.create({
      component: SelectDevicePage,
      componentProps: {
        // groupItems: this.groupItems,
        // groupID: this.groupID
        moduleName: "module_history"
      }
    });

    assignItemModal.onDidDismiss().then((res)=>{
      this.selectedItems = res.data;
      
      // Present Preloading
      this.presentLoading();

      this.storageService.setItem().subscribe(res => {
        this.current_item = this.selectedItems;
        this.deviceIcon =  this.current_item.icon_name;
        this.deviceIconSize =  this.current_item.icon_size;
        this.devicePlateNumber = this.current_item.plate;
      },(err) => {
        console.log(err);
      }, () => {
  
        this.init().subscribe(
          data => {
            let response:any = data;
            this.historyJson = response.positions;
            this.parkingJson = JSON.parse(response.parking);
            this.rangeStop = this.historyJson.length;
          },error => {
            console.log(error);
            this.loading.dismiss();
          },
          () => {
            if(this.rangeStop > 0){   
              this.getData(); 
            }
            else{
              alert("No data");
            }
            this.loading.dismiss();
          }
        );
  
  
      });
      

    }).catch(err => {
      console.log(err);
    });

    return await assignItemModal.present();
  }

  toggleTraffic = false;
  toggleSatellite = false;
  followCamera = false;
  controlNavigateDevice()
  {
    this.map.animateCamera({
      target: {lat: this.historyJson[this.rangeCurrent].latitude, lng: this.historyJson[this.rangeCurrent].longitude},
      duration: 750
    });
  }
  controlNavigateStartPoint()
  {
    this.map.animateCamera({
      target: {lat: this.historyJson[0].latitude, lng: this.historyJson[0].longitude},
      duration: 750
    });
  }
  controlNavigateFinishPoint()
  {
    let countHistoryJson = this.historyJson.length - 1;
    this.map.animateCamera({
      target: {lat: this.historyJson[countHistoryJson].latitude, lng: this.historyJson[countHistoryJson].longitude},
      duration: 750
    });
  }

  
  controlTrafficLayer()
  {
    this.toggleTraffic = !this.toggleTraffic;
    this.map.setTrafficEnabled( this.toggleTraffic );
  }
  controlSatelliteLayer()
  {
    this.toggleSatellite = !this.toggleSatellite;
    if(this.toggleSatellite == false){
      this.map.setMapTypeId(GoogleMapsMapTypeId["ROADMAP"]);
    }
    else{
      this.map.setMapTypeId(GoogleMapsMapTypeId["HYBRID"]);
    }
  }

  controlZoomIn()
  {
    this.map.animateCameraZoomIn().then(()=>{});
  }
  controlZoomOut()
  {
    this.map.animateCameraZoomOut().then(()=>{});
  }

  showParkSign = false;
  controlToggleShowParkSign()
  {
    this.showParkSign = !this.showParkSign;
    if(this.showParkSign)
    {
      for( let i = 0; i < this.parkingJson.length; i++ )
      {
        let parkingIcon: MarkerIcon = {
          url: 'assets/google/marker/park-sign.png',
          size: {
            width: 40,
            height: 57
          }
        };
        let parking: Marker = this.map.addMarkerSync({
          icon: parkingIcon,
          position: {
            lat: this.parkingJson[i].latitude,
            lng: this.parkingJson[i].longitude
          },
        });
        this.parkingMarker.push(parking);
      }

      this.startMarker.remove();
      this.startMarker = null;
  
      this.finishMarker.remove();
      this.finishMarker = null;
    }
    else
    {
      for( let i = 0; i < this.parkingMarker.length; i++ )
      {
        this.parkingMarker[i].remove();
      }
      let startIcon: MarkerIcon = {
        url: 'assets/google/marker/start-sign.png',
        size: {
          width: 40,
          height: 57
        }
      };
      this.startMarker = this.map.addMarkerSync({
        icon: startIcon,
        position: {
          lat: this.historyJson[0].latitude,
          lng: this.historyJson[0].longitude
        },
      });
  
  
      let countHistoryJson = this.historyJson.length - 1;
      let finishIcon: MarkerIcon = {
        url: 'assets/google/marker/stop-sign.png',
        size: {
          width: 40,
          height: 57
        }
      };
      this.finishMarker = this.map.addMarkerSync({
        icon: finishIcon,
        position: {
          lat: this.historyJson[countHistoryJson].latitude,
          lng: this.historyJson[countHistoryJson].longitude
        },
      });
    }
  }

  controlGoogleDirection()
  {
    // let options: LaunchNavigatorOptions = {
    //   start: [this.userPosition.lat,this.userPosition.lng],
    //   app: this.launchNavigator.APP.GOOGLE_MAPS
    // };
    // this.launchNavigator.navigate([this.devicePosition.lat,this.devicePosition.lng],options)
    //   .then(success =>{
    //     console.log(success);
    //   },error=>{
    //     console.log(error);
    // });
  }
}
