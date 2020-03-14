import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ENDPOINT } from '../../environments/environment';
import { Storage } from '@ionic/storage';
import { tap } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class TraccarService {

  middleware = 'event/';

  constructor(
    private http: HttpClient,
    private storage: Storage,
    private authService: AuthService
  ) { }

  getTireMaintenance(deviceid, pagination) {
    const headers = new HttpHeaders({
      'Authorization': this.authService.token["token_type"]+" "+this.authService.token["access_token"]
    });
    return this.http.get(ENDPOINT.API_URL + this.middleware + 'tire-maintenance', { headers: headers, params: { deviceid: deviceid, pagination: pagination } })
    .pipe(
      tap(device => {
        return device;
      })
    )
  }

  getOilMaintenance(deviceid, pagination) {
    const headers = new HttpHeaders({
      'Authorization': this.authService.token["token_type"]+" "+this.authService.token["access_token"]
    });
    return this.http.get(ENDPOINT.API_URL + this.middleware + 'oil-maintenance', { headers: headers, params: { deviceid: deviceid, pagination: pagination } })
    .pipe(
      tap(device => {
        return device;
      })
    )
  }

  getIgnition(deviceid, pagination) {
    const headers = new HttpHeaders({
      'Authorization': this.authService.token["token_type"]+" "+this.authService.token["access_token"]
    });
    return this.http.get(ENDPOINT.API_URL + this.middleware + 'ignition/'+deviceid+'/'+pagination, { headers: headers })
    .pipe(
      tap(device => {
        return device;
      })
    )
  }

  getOverspeed(deviceid, pagination) {
    const headers = new HttpHeaders({
      'Authorization': this.authService.token["token_type"]+" "+this.authService.token["access_token"]
    });
    return this.http.get(ENDPOINT.API_URL + this.middleware + 'overspeed/'+deviceid+'/'+pagination, { headers: headers })
    .pipe(
      tap(device => {
        return device;
      })
    )
  }

  getParking(deviceid, from, to) {
    const headers = new HttpHeaders({
      'Authorization': this.authService.token["token_type"]+" "+this.authService.token["access_token"]
    });
    return this.http.get(ENDPOINT.API_URL + this.middleware + 'parking-alarm', { headers: headers, params: { deviceid: deviceid, from: from, to: to } })
    .pipe(
      tap(device => {
        return device;
      })
    )
  }

  getTrip(deviceid, from, to) {
    const headers = new HttpHeaders({
      'Authorization': this.authService.token["token_type"]+" "+this.authService.token["access_token"]
    });
    return this.http.get(ENDPOINT.API_URL + this.middleware + 'trips', { headers: headers, params: { deviceid: deviceid, from: from, to: to } })
    .pipe(
      tap(device => {
        return device;
      })
    )
  }

  getSummary(deviceid, from, to) {
    const headers = new HttpHeaders({
      'Authorization': this.authService.token["token_type"]+" "+this.authService.token["access_token"]
    });
    return this.http.get(ENDPOINT.API_URL + this.middleware + 'summary', { headers: headers, params: { deviceid: deviceid, from: from, to: to } })
    .pipe(
      tap(device => {
        return device;
      })
    )
  }

  getMyDevices(q = ''){
    const headers = new HttpHeaders({
      'Authorization': this.authService.token["token_type"]+" "+this.authService.token["access_token"]
    });
    let options = { headers: headers };
    return this.http.post(ENDPOINT.API_URL + 'item/my-devices', null, options)
    .pipe(
      tap(devices => {
        return devices;
      })
    )
  }

}