import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Platform, NavController, AlertController, LoadingController, ModalController } from "@ionic/angular";
import { AuthService } from 'src/app/services/auth.service';
import { StorageService } from 'src/app/services/storage.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ENDPOINT } from '../../../environments/environment';
import { tap } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';
import { interval, Subscription } from 'rxjs';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { SelectDevicePage } from '../select-device/select-device.page';

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
  GoogleMapsMapTypeId
} from '@ionic-native/google-maps';

@Component({
  selector: 'app-geolocation',
  templateUrl: './geolocation.page.html',
  styleUrls: ['./geolocation.page.scss'],
})
export class GeolocationPage implements OnInit {
  @ViewChild('map', { static: true }) mapElement: ElementRef;

  map: GoogleMap;
  markers = [];
  watch: string;
  user = null;

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

  private current_item;

  constructor(
    private launchNavigator: LaunchNavigator,
    private http: HttpClient,
    private authService: AuthService,
    private storageService: StorageService,
    private navCtrl: NavController,
    private loadingController: LoadingController,
    private lang: TranslateService,
    private platform: Platform,
    private geolocation: Geolocation,
    private modalController: ModalController
  ) {
  }

  currentUser:any;
  messages:any;
  message:any;



  loading;
  httpResponse;
  watchId;
  subscription: Subscription;
  userPosition = {"lat": 0, "lng": 0};
  devicePosition = {"lat": 0, "lng": 0};
  watchDevicePositionInc = 0;
  watchUserPositionInc=0;
  devicePath: Polyline = null;
  deviceMarker: Marker;
  userMarker: Marker;
  infoBox: HtmlInfoWindow = null;
  deviceIcon;
  deviceIconSize;
  userIcon;
  userIconSize;
  distance;
  isMapHidden = true;
  toggleTraffic = false;
  toggleSatellite = false;
  followCamera = false;
  spriteNameArr = [
    "0",  "15",  "30",  "45",  "60",  "75",  "90",  "105",  "120",  "135",  "150",  "165",  "180",  "195",  "210",  "225",  "240",  "255",  "270",  "285",  "300",  "315",  "330",  "345",  "360"
  ];

  async ngOnInit()
  {
    await this.platform.ready();
    await this.loadMap();
  }

  loadMap()
  {
    // Present Preloading
    this.presentLoading();

    this.map = GoogleMaps.create('map_canvas', {
      camera: {
        target: {
          lat: 11.5560777,
          lng: 104.8941368
        },
        zoom: 7,
        tilt: 30,
      },
      preferences: {
        zoom: {
          minZoom: 6,
          maxZoom: 18
        },
        building: true
      },
    });
    
    this.map.one(GoogleMapsEvent.MAP_READY).then(()=>{
      // Get Current Item from Storage
      this.storageService.setItem().subscribe(res => {
        this.current_item = this.storageService.current_item;
        this.deviceIcon =  this.current_item.icon_name;
        this.deviceIconSize =  this.current_item.icon_size;
        this.devicePlateNumber = this.current_item.plate;
      },(err) => {
        console.log(err);
      }, () => {
  
        // Start Http Request
        this.locateDevice();
  
        // Set Interval every 7.5 Second to get http request
        const source = interval(7500);
        this.subscription = source.subscribe(val => {
          this.locateDevice();
        });
  
      });
    });
  }


  goBack()
  {
    this.navCtrl.navigateBack('dashboard/tabs/home');
  }

  ionViewWillLeave()
  {
    this.subscription.unsubscribe();
  }


  locateDevice(){

    let selectedItemIds = [];
    
    for( let i = 0; i < this.selectedItems.length; i++ )
    {
      if(this.selectedItems[i].deviceid)
        selectedItemIds.push(this.selectedItems[i].deviceid);
      else
        selectedItemIds.push(this.selectedItems[i].device.id);
    }
    if((selectedItemIds.length)<=0)
    {
      if(this.current_item.deviceid)
      {
        selectedItemIds.push(this.current_item.deviceid);
        console.log("this.current_item.deviceid");
      } 
      else
      {
        selectedItemIds.push(this.current_item.device.id);
        console.log("this.current_item.device.id");
      }
    }

    this.preparingRequest(selectedItemIds).subscribe(res => {
      this.httpResponse = res;
    },err => {
      this.loading.dismiss();
    },()=>{

      // Start Locating User
      // this.locateUser();

      // this.devicePosition.lat = this.httpResponse.position.latitude;
      // this.devicePosition.lng = this.httpResponse.position.longitude;

      // this.drawDeviceMarker();
      // this.drawDevicePath();
      // this.drawInfoBox();
      // this.watchDevicePositionInc++;
      // this.loading.dismiss();




      // Start Locating User
      this.locateUser();

      let devices = this.httpResponse;

      let devices_length = Object.keys(devices).length;

      if( devices_length > 1 ){
        this.disable_next_prev = false;
      }
      else{
        this.disable_next_prev = true;
      }

      this.instantiateGoogleMap(); // Run only once using watchPositionInc

      let firstDevice = 0;
      
      var latlngbounds = new google.maps.LatLngBounds();


      let device_index_array = [];
      let current_item_id = 0;

      for(var device in devices) {

        device_index_array.push( device );

        if(devices[device].position)
        {
          if( Object.keys(this.watchDevicePositionInc).length < devices_length )
          {
            this.watchDevicePositionInc[device] = 0;
          }
          else{
            this.watchDevicePositionInc[device] = this.watchDevicePositionInc[device] + 1;
          }
          this.drawDeviceMarker(devices[device]);
          // if( firstDevice == 0 )
          // {
          //   this.devicePosition.lat = devices[device].position.latitude;
          //   this.devicePosition.lng = devices[device].position.longitude;
            // if(this.current_item.deviceid)
            //   this.current_item = devices[device];
          // }
          firstDevice++;
          this.instantiateMap++;
          
          if(this.setMapCenter == 0){
            let loc = new google.maps.LatLng(devices[device].position.latitude, devices[device].position.longitude);
            latlngbounds.extend(loc);
          }
        }
      }

      if(this.current_item.deviceid)
        current_item_id = this.current_item.deviceid;
      else
        current_item_id = this.current_item.device.id;

      for(var i=0; i<device_index_array.length; i++)
      {
        if( device_index_array[i] == current_item_id )
        {
          this.current_item = devices[device_index_array[i]];
          this.devicePosition.lat = devices[device_index_array[i]].position.latitude;
          this.devicePosition.lng = devices[device_index_array[i]].position.longitude;
        }
      }

      if(this.setMapCenter == 0){
        this.map.fitBounds(latlngbounds);
      }
      this.setMapCenter++;
      
      this.drawDevicePath();
      this.drawInfoBox();
      // this.loading.dismiss();
    });
  }


  locateUser()
  {
    this.geolocation.getCurrentPosition().then(position=>{
      console.log(position);
      if(position)
      {
        this.userPosition.lat = position.coords.latitude;
        this.userPosition.lng = position.coords.longitude;
        this.drawUserMarker();
        this.drawDevicePath();
        this.watchUserPositionInc++;
      }
    }).catch(error=>{
      console.log(error);
    });
    
  }


  drawDevicePath()
  {
    let flightPlanCoordinates = [
      { lat: this.userPosition.lat, lng: this.userPosition.lng },
      { lat: this.devicePosition.lat, lng: this.devicePosition.lng }
    ];
    if( this.userPosition.lat == 0 || this.userPosition.lng == 0 || this.devicePosition.lat == 0 || this.devicePosition.lng == 0 ){
      return;
    }
    if( this.devicePath == null )
    {
      this.devicePath = this.map.addPolylineSync({
        points: flightPlanCoordinates,
        color: '#FF0000',
        width: 2,
        geodesic: true,
      });
      return;
    }
    this.devicePath.setPoints(flightPlanCoordinates);
  }

  drawDeviceMarker()
  {
    let randomSprite = Math.floor(Math.random() * 24);

    let icon: MarkerIcon = {
      url: 'assets/google/marker/' + this.deviceIcon +  '/0.png',
      size: {
        width: this.deviceIconSize,
        height: this.deviceIconSize
      }
    };

    if( this.watchDevicePositionInc > 0 ){
      this.deviceMarker.setPosition( new LatLng( this.devicePosition.lat, this.devicePosition.lng ));
    }
    else{
      this.deviceMarker = this.map.addMarkerSync({
        icon: icon,
        position: {
          lat: this.devicePosition.lat,
          lng: this.devicePosition.lng
        },
        anchor: [this.deviceIconSize/2, this.deviceIconSize/2],
      });


      this.map.setOptions({
        camera: {
          target: [
            { lat: this.devicePosition.lat, lng: this.devicePosition.lng }
          ]
        }
      });
      

    }
    this.deviceMarker.setIconAnchor(this.deviceIconSize/2, this.deviceIconSize/2);

    if( this.followCamera )
    {
      this.map.setOptions({
        camera: {
          target: [
            { lat: this.devicePosition.lat, lng: this.devicePosition.lng }
          ]
        }
      });
    }
    
    this.deviceMarker.setIcon(icon);
  }

  drawUserMarker()
  {
    if( this.watchUserPositionInc > 0 )
    {
      this.userMarker.setPosition( new LatLng( this.userPosition.lat, this.userPosition.lng ));
      return;
    }
    this.drawInfoBox();

    let icon: MarkerIcon = {
      url: "./assets/google/marker/current-location.png",
      size: {
        width: 24,
        height: 24
      }
    };
    this.userMarker = this.map.addMarkerSync({
      icon: icon,
      position: {
        lat: this.userPosition.lat,
        lng: this.userPosition.lng
      },
      anchor: [12, 12]
    });
    this.userMarker.setIconAnchor(12,12);
    this.userMarker.setIcon(icon);

    // this.map.setOptions({
    //   camera: {
    //     target: {
    //       lat: this.userPosition.lat,
    //       lng: this.userPosition.lng
    //     },
    //     zoom: 18
    //   }
    // });
  }

  drawInfoBox(){
    let traccar_attributes = JSON.parse(this.httpResponse.position.attributes);
    let traccar_event = this.httpResponse.event;

    let traccar_status = traccar_event.type;
    let traccar_status_color = this.statusColor[traccar_event.type];
    let traccar_speed = (Math.abs( this.httpResponse.position.speed * 1.852)).toFixed(2) + this.lang.instant('APP.kmh') + '&nbsp;';
    let traccar_battery = Math.abs(traccar_attributes["batteryLevel"]);
    let traccar_ignition = this.lang.instant('APP.' + this.ignitionStatus[traccar_attributes["ignition"]]);
    let traccar_trip = (traccar_attributes["totalDistance"]/1000).toFixed(0) + this.lang.instant('APP.km');
    let traccar_hours = (traccar_attributes["hours"]/3.6e+6).toFixed(2) + this.lang.instant('APP.h');
    let traccar_date = this.readableLocalDate(this.httpResponse.position.fixtime) + ' ' + this.readableLocalTime(this.httpResponse.position.fixtime);
    
    let battery_spite = this.checkMyBatterySprite( traccar_battery );
    this.distance = (this.calculateDistance( [this.userPosition.lat, this.userPosition.lng], [this.devicePosition.lat,this.devicePosition.lng], false)).toFixed(2) + this.lang.instant('APP.km');

    let frame: HTMLElement = document.createElement('div');
    let cssOptions = {
      width: "320px",
      opacity: "0.9",
      padding: "7px"
    };
    
    frame.innerHTML = `
      <div style="font-size:1em;">
        <div style="float:left;padding:7px 0px 5px 7px;">` + traccar_date + `</div>
        <div style="float:right;padding:4px 7px 5px 0px;">
          <div style="background-color:` + traccar_status_color + `;color:#fff;padding:2px 5px; border-radius: 5px;">` + this.lang.instant('APP.'+traccar_status) + `</div>
        </div>
        <div style="border-bottom:1px solid rgba(119,119,119,0.75);clear:both;"></div>


        <div style="width:49%;float:left;padding: 7px 0px 0px 7px;">

          <div>
            <div style="width:auto;float:left">
              <div style="padding:1px 0px;color:#1877f2;">` + this.lang.instant('APP.battery') + `</div>
            </div>
            <div style="width:auto;float:right">
              <div style="padding:1px 0px;color:#fff;">
                <div style="width:48px;font-size:0.75em;background:url(assets/google/battery/` + battery_spite + `) no-repeat;text-align:center;color:#111;">` + traccar_battery + `%</div>
              </div>
            </div>
            <div style="clear:both;"></div>
          </div>

          <div>
            <div style="width:auto;float:left">
              <div style="padding:1px 0px;color:#1877f2;">` + this.lang.instant('APP.ignition') + ` </div>
            </div>
            <div style="width:auto;float:right">
              <div style="padding:1px 0px;color:#333;">` + traccar_ignition + `</div>
            </div>
            <div style="clear:both;"></div>
          </div>

          <div>
            <div style="width:auto;float:left">
              <div style="padding:1px 0px;color:#1877f2;">` + this.lang.instant('APP.speed') +`</div>
            </div>
            <div style="width:auto;float:right">
              <div style="padding:1px 0px;color:#333;">` + traccar_speed + `</div>
            </div>
            <div style="clear:both;"></div>
          </div>
          
        </div>
        

        <div style="float:left;width:2%;">&nbsp;</div>


        <div style="width:49%;float:left;padding:7px 7px 0px 0px;">

          <div>
            <div style="width:auto;float:left">
              <div style="padding:1px 0px;color:#1877f2;">`+ this.lang.instant('APP.distance') + `</div>
            </div>
            <div style="width:auto;float:right">
              <div style="padding:1px 0px;color:#333;">` + this.distance + `</div>
            </div>
            <div style="clear:both;"></div>
          </div>

          <div>
            <div style="width:auto;float:left">
              <div style="padding:1px 0px;color:#1877f2;">` + this.lang.instant('APP.hours') + `</div>
            </div>
            <div style="width:auto;float:right">
              <div style="padding:1px 0px;color:#333;">` + traccar_hours + `</div>
            </div>
            <div style="clear:both;"></div>
          </div>

          <div>
            <div style="width:auto;float:left">
              <div style="padding:1px 0px;color:#1877f2;">` + this.lang.instant('APP.trip') + `</div>
            </div>
            <div style="width:auto;float:right">
              <div style="padding:1px 0px;color:#333;">` + traccar_trip + `</div>
            </div>
            <div style="clear:both;"></div>
          </div>

        </div>
      </div>
    `;
    if( this.watchDevicePositionInc > 0 )
    {
      this.infoBox.setContent(frame, cssOptions);
      return;
    }

    
    this.loading.dismiss();
    this.infoBox = new HtmlInfoWindow();
    this.infoBox.setContent(frame, cssOptions);
    this.infoBox.open(this.deviceMarker);
    

    // Prevent closing when Clicking on map
    // this.infoBox.on(GoogleMapsEvent.INFO_CLOSE).subscribe(()=>{
    //   setTimeout(()=>{
    //     this.infoBox.open(this.deviceMarker);
    //   }, 50);
    // });
    
  }

  instantiateGoogleMap()
  {
    if(this.watchDevicePositionInc > 0){
      return;
    }

    let mapOptions: GoogleMapOptions = {
      camera: {
         target: {
           lat: this.userPosition.lat,
           lng: this.userPosition.lng
         },
         zoom: 14
       }
    };
    this.map = GoogleMaps.create('map_canvas', mapOptions);
  }

  controlZoomIn()
  {
    this.map.animateCameraZoomIn().then(()=>{});
  }
  controlZoomOut()
  {
    this.map.animateCameraZoomOut().then(()=>{});
  }
  controlGoogleDirection()
  {
    let options: LaunchNavigatorOptions = {
      start: [this.userPosition.lat,this.userPosition.lng],
      app: this.launchNavigator.APP.GOOGLE_MAPS
    };
    this.launchNavigator.navigate([this.devicePosition.lat,this.devicePosition.lng],options)
      .then(success =>{
        console.log(success);
      },error=>{
        console.log(error);
    });
  }
  controlFollowCamera()
  {
    this.followCamera = !this.followCamera;
    if(this.followCamera)
    {
      this.map.setOptions({
        camera: {
          target: [
            { lat: this.devicePosition.lat, lng: this.devicePosition.lng }
          ]
        }
      });
    }
  }
  toggleInfoBox = true;
  controlToggleInfoBox()
  {
    this.toggleInfoBox = !this.toggleInfoBox;
    if(this.toggleInfoBox)
      this.infoBox.open(this.deviceMarker);
    else
      this.infoBox.close();
  }
  controlNavigateDevice()
  {
    this.map.animateCamera({
      target: {lat: this.devicePosition.lat, lng: this.devicePosition.lng},
      duration: 750
    });
  }
  controlNavigateUser()
  {
    this.map.animateCamera({
      target: {lat: this.userPosition.lat, lng: this.userPosition.lng},
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

  preparingRequest(deviceid)
  {
    this.authService.getToken();
    let token = this.authService.token;

    const headers = new HttpHeaders({
      'Authorization': token["token_type"]+" "+token["access_token"]
    });

    return this.http.get(ENDPOINT.API_URL + 'traccar/devices/' + deviceid, { headers: headers })
    .pipe(
      tap(data => {
        return data;
      })
    );
  }

  async presentLoading() {
    this.loading = await this.loadingController.create({
      message: 'Please wait',
      duration: 60000
    });
    await this.loading.present();
  }


  calculateDistance(latlngA, latlngB, isMiles)
  {
    const squared = x => x * x;
    const toRad = x => (x * Math.PI) / 180;
    const R = 6371; // Earth’s mean radius in km

    const dLat = toRad(latlngB[0] - latlngA[0]);
    const dLon = toRad(latlngB[1] - latlngA[1]);

    const dLatSin = squared(Math.sin(dLat / 2));
    const dLonSin = squared(Math.sin(dLon / 2));

    const a = dLatSin +
              (Math.cos(toRad(latlngA[0])) * Math.cos(toRad(latlngB[0])) * dLonSin);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    let distance = R * c;

    if (isMiles) distance /= 1.609344;

    return distance;
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

  private readableLocalTime( the_date )
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



  devicePlateNumber;
  selectedItems;
  async selectDevice()
  {
    const assignItemModal = await this.modalController.create({
      component: SelectDevicePage,
      componentProps: {
        // groupItems: this.groupItems,
        // groupID: this.groupID
        moduleName: "module_geolocation"
      }
    });

    assignItemModal.onDidDismiss().then((res)=>{
      this.selectedItems = res.data;
      
      // Present Preloading
      this.presentLoading();

      // Get Current Item from Storage
      this.storageService.setItem().subscribe(res => {
        this.current_item = this.selectedItems;
        this.deviceIcon =  this.current_item.icon_name;
        this.deviceIconSize =  this.current_item.icon_size;
        this.devicePlateNumber = this.current_item.plate;
      },(err) => {
        console.log(err);
      }, () => {

        // Start Http Request
        this.locateDevice();

      });
      

    }).catch(err => {
      console.log(err);
    });

    return await assignItemModal.present();
  }


}