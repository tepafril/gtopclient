import { Component, NgZone, OnInit } from '@angular/core';
import { Platform, NavController, ModalController, LoadingController } from "@ionic/angular";
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { interval, Subscription } from 'rxjs';

import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  ILatLng,
  Circle,
  Marker,
  Spherical,
  MarkerIcon,
  LatLng
} from '@ionic-native/google-maps';


@Component({
  selector: 'app-geofence',
  templateUrl: './geofence.page.html',
  styleUrls: ['./geofence.page.scss'],
})
export class GeofencePage implements OnInit {

  loading;
  map: GoogleMap;
  subscription: Subscription;

  public circle: Circle;
  public userMarker: Marker;
  public userPosition = {"lat": 0, "lng": 0};
  public watchUserPositionInc = 0;
  public distanceSize = 500;

  isResizable = false;

  constructor(
    private platform: Platform,
    private navCtrl: NavController,
    private _ngZone: NgZone,
    private geolocation: Geolocation,
    private loadingController: LoadingController
  ) { }

  goBack()
  {
    this.navCtrl.navigateBack('dashboard/tabs/home');
  }

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
      'camera': {
        'padding': 100
      },
      'gestures': {
        'scroll': true,
        'tilt': true,
        'rotate': true,
        'zoom': true
      }
    });

    this.map.one(GoogleMapsEvent.MAP_READY).then(()=>{
      // Start Http Request
      this.locateUser();

      // Set Interval every 7.5 Second to get http request
      const source = interval(7500);
      this.subscription = source.subscribe(val => {
        this.locateUser();
      });
    });

  }

  locateUser()
  {
    this.geolocation.getCurrentPosition().then(position=>{
      if(position)
      {
        this.userPosition.lat = position.coords.latitude;
        this.userPosition.lng = position.coords.longitude;
        this.drawUserMarker();
        this.watchUserPositionInc++;
      }
    }).catch(error=>{
      console.log(error);
    });
  }


  drawUserMarker()
  {
    if( this.watchUserPositionInc > 0 )
    {
      this.userMarker.setPosition( new LatLng( this.userPosition.lat, this.userPosition.lng ));
      return;
    }

    let icon: MarkerIcon = {
      url: "assets/google/marker/current-location.png",
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

    this.drawCircle();
  }

  resizableMarker: Marker;
  movableMarker: Marker;
  drawCircle()
  {
    this.loading.dismiss();

    let center: ILatLng = {"lat": this.userPosition.lat, "lng": this.userPosition.lng};

    let positions: ILatLng[] = [0, 90, 180, 270].map((degree: number) => {
      return Spherical.computeOffset(center, this.distanceSize, degree);
    });

    this.map.setOptions({
      camera: {
        target: positions,
        padding: 100
      }
    });

    this.circle = this.map.addCircleSync({
      'clickable': true,
      'center': center,
      'radius': this.distanceSize,
      'strokeColor' : '#00a850',
      'strokeWidth': 4,
      'fillColor' : '#00a85040'
    });

    let moveIcon: MarkerIcon = {
      url: 'assets/google/marker/movableMarker.png',
      size: {
        width: 40,
        height: 40
      }
    };
    this.movableMarker = this.map.addMarkerSync({
      icon: moveIcon,
      position: this.circle.getCenter(),
      draggable: true
    });
    this.movableMarker.setIconAnchor(20, 20);

    this.movableMarker.bindTo("position", this.circle, "center");

  }


  enableResizableMarker()
  {
    this.isResizable = !this.isResizable;
    if( this.isResizable )
    {
      this.movableMarker.remove();
      this.movableMarker = null;

      let center: ILatLng = {"lat": this.userPosition.lat, "lng": this.userPosition.lng};
      let positions: ILatLng[] = [0, 90, 180, 270].map((degree: number) => {
        return Spherical.computeOffset(center, this.distanceSize, degree);
      });

      let resizeIcon: MarkerIcon = {
        url: 'assets/google/marker/resizableMarker.png',
        size: {
          width: 40,
          height: 40
        }
      };

      this.resizableMarker = this.map.addMarkerSync({
        icon: resizeIcon,
        position: positions[0],
        draggable: true,
        title: ' Drag here'
      });
      this.resizableMarker.trigger(GoogleMapsEvent.MARKER_CLICK);
      this.resizableMarker.setIconAnchor(20, 20);

      this.resizableMarker.on('position_changed').subscribe((params: any) => {
        this._ngZone.run(() => {
          let newValue: ILatLng = <ILatLng>params[1];
          this.distanceSize = Math.round(Spherical.computeDistanceBetween(center, newValue));
          this.circle.setRadius(this.distanceSize);
        });
      });
    }
    else{
      this.resizableMarker.remove();
      this.resizableMarker = null;

      let moveIcon: MarkerIcon = {
        url: 'assets/google/marker/movableMarker.png',
        size: {
          width: 40,
          height: 40
        }
      };
      this.movableMarker = this.map.addMarkerSync({
        icon: moveIcon,
        position: this.circle.getCenter(),
        draggable: true
      });
      this.movableMarker.setIconAnchor(20, 20);

      this.movableMarker.bindTo("position", this.circle, "center");

      this.movableMarker.on('position_changed').subscribe((params: any) => {
        let newValue: ILatLng = <ILatLng>params[1];
        let positions: ILatLng[] = [0, 90, 180, 270].map((degree: number) => {
          return Spherical.computeOffset(newValue, this.distanceSize, degree);
        });
        this.resizableMarker.setPosition(positions[0]);
      });
    }
  }


  async presentLoading() {
    this.loading = await this.loadingController.create({
      message: 'Please wait',
      duration: 60000
    });
    await this.loading.present();
  }


}