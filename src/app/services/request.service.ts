import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ENDPOINT } from '../../environments/environment';
import { Storage } from '@ionic/storage';
import { tap } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(
    private http: HttpClient,
    private storage: Storage,
    private authService: AuthService
  ) { }


  setIcon(deviceID, iconName, iconSize) {
    const headers = new HttpHeaders({
      'Authorization': this.authService.token["token_type"]+" "+this.authService.token["access_token"]
    });
    const data = {
      deviceid: deviceID,
      icon_name: iconName,
      icon_size: iconSize,
    };
    return this.http.post(ENDPOINT.API_URL + 'item/set-icon', data,{ headers: headers })
    .pipe(
      tap(device => {
        return device;
      })
    )
  }


  getGroup(userid, pagination) {
    const headers = new HttpHeaders({
      'Authorization': this.authService.token["token_type"]+" "+this.authService.token["access_token"]
    });
    return this.http.get(ENDPOINT.API_URL + 'group/get-groups/'+userid+'/'+pagination, { headers: headers })
    .pipe(
      tap(device => {
        return device;
      })
    )
  }


  createGroup(name = ''){
    const headers = new HttpHeaders({
      'Authorization': this.authService.token["token_type"]+" "+this.authService.token["access_token"]
    });
    let options = { headers: headers, params: {"name": name}};
    return this.http.post(ENDPOINT.API_URL + 'group/create-group', null, options)
    .pipe(
      tap(devices => {
        return devices;
      })
    )
  }


  updateGroup(id, name = ''){
    const headers = new HttpHeaders({
      'Authorization': this.authService.token["token_type"]+" "+this.authService.token["access_token"]
    });
    let options = { headers: headers, params: {"id": id, "name": name}};
    return this.http.put(ENDPOINT.API_URL + 'group/update-group', null, options)
    .pipe(
      tap(devices => {
        return devices;
      })
    )
  }


  deleteGroup(id = ''){
    const headers = new HttpHeaders({
      'Authorization': this.authService.token["token_type"]+" "+this.authService.token["access_token"]
    });
    return this.http.delete(ENDPOINT.API_URL + 'group/delete-group/' + id, { headers: headers })
    .pipe(
      tap(devices => {
        return devices;
      })
    )
  }


  getGroupDevices(groupid, pagination) {
    const headers = new HttpHeaders({
      'Authorization': this.authService.token["token_type"]+" "+this.authService.token["access_token"]
    });
    return this.http.get(ENDPOINT.API_URL + 'group/get-group-devices/'+groupid+'/'+pagination, { headers: headers })
    .pipe(
      tap(device => {
        return device;
      })
    )
  }


  getGroupUsers(groupid, pagination) {
    const headers = new HttpHeaders({
      'Authorization': this.authService.token["token_type"]+" "+this.authService.token["access_token"]
    });
    return this.http.get(ENDPOINT.API_URL + 'group/get-group-users/'+groupid+'/'+pagination, { headers: headers })
    .pipe(
      tap(device => {
        return device;
      })
    )
  }


  attachUserToGroup(phoneNumber, groupID){
    const headers = new HttpHeaders({
      'Authorization': this.authService.token["token_type"]+" "+this.authService.token["access_token"]
    });
    let options = { headers: headers, params: {"phone": phoneNumber, "group_id": groupID}};
    return this.http.put(ENDPOINT.API_URL + 'group/attach-user-to-group', null, options)
    .pipe(
      tap(devices => {
        return devices;
      })
    )
  }

  attachItemToGroup(itemID, groupID){
    const headers = new HttpHeaders({
      'Authorization': this.authService.token["token_type"]+" "+this.authService.token["access_token"]
    });
    let options = { headers: headers, params: {"item_id": itemID, "group_id": groupID}};
    return this.http.put(ENDPOINT.API_URL + 'group/attach-item-to-group', null, options)
    .pipe(
      tap(devices => {
        return devices;
      })
    )
  }

  detachUserFromGroup(groupID, userID){
    const headers = new HttpHeaders({
      'Authorization': this.authService.token["token_type"]+" "+this.authService.token["access_token"]
    });
    return this.http.delete(ENDPOINT.API_URL + 'group/detach-user-from-group/' + groupID + "/" + userID, { headers: headers })
    .pipe(
      tap(devices => {
        return devices;
      })
    )
  }

  detachItemFromGroup(groupID, itemID){
    const headers = new HttpHeaders({
      'Authorization': this.authService.token["token_type"]+" "+this.authService.token["access_token"]
    });
    return this.http.delete(ENDPOINT.API_URL + 'group/detach-item-from-group/' + groupID + "/" + itemID, { headers: headers })
    .pipe(
      tap(devices => {
        return devices;
      })
    )
  }


  getUserItems(pagination) {
    const headers = new HttpHeaders({
      'Authorization': this.authService.token["token_type"]+" "+this.authService.token["access_token"]
    });
    return this.http.get(ENDPOINT.API_URL + 'group/get-user-items/' + pagination, { headers: headers })
    .pipe(
      tap(device => {
        return device;
      })
    )
  }

}
