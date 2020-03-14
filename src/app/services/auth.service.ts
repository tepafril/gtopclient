import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { User } from '../models/user';
import { Storage } from '@ionic/storage';

import { ENDPOINT } from '../../environments/environment';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn = false;
  isVerified = 'false';
  token:any;
  user:any;

  constructor(
    private http: HttpClient,
    private storage: Storage,
  ) { }


  login(phone: String, password: String) {
    return this.http.post(ENDPOINT.API_URL + 'auth/login',
      {phone: phone, password: password}
    ).pipe(
      tap(res => {
        let response = res;
        let token = {};
        token["access_token"] = response["access_token"];
        token["token_type"] = response["token_type"];
        token["expires_at"] = response["expires_at"];

        this.storage.set('token', token)
        .then(
          () => {
            console.log('Token Stored');
          },
          error => console.error('Error storing item', error)
        );

        this.storage.set('user', response["user"])
        .then(
          () => {
            console.log('User Stored');
          },
          error => console.error('Error storing item', error)
        );
        this.user = response["user"];
        this.token = token;
        this.isLoggedIn = true;
        return token;
      }),
    );
  }

  logout() {
    const headers = new HttpHeaders({
      'Authorization': this.token["token_type"]+" "+this.token["access_token"]
    });
    return this.http.get(ENDPOINT.API_URL + 'auth/logout', { headers: headers })
    .pipe(
      tap(data => {
        this.storage.remove('token').then(
          () => {
            console.log('Token Stored');
          },
          error => console.error('Error storing item', error)
        );
        this.isLoggedIn = false;
        delete this.token;
        return data;
      })
    )
  }

  changePassword(password, newPassword, confirmPassword) {
    const headers = new HttpHeaders({
      'Authorization': this.token["token_type"]+" "+this.token["access_token"]
    });
    return this.http.get(ENDPOINT.API_URL + 'auth/change-password', { headers: headers,
      params: {
      old_password: password,
      password: newPassword,
      password_confirmation: confirmPassword
    }})
    .pipe(
      tap(data => {
        this.storage.remove('token').then(
          () => {
            console.log('Token Stored');
          },
          error => console.error('Error storing item', error)
        );
        this.isLoggedIn = false;
        delete this.token;
        return data;
      })
    )
  }

  editProfile(name, gender, dob, email) {
    const headers = new HttpHeaders({
      'Authorization': this.token["token_type"]+" "+this.token["access_token"]
    });
    return this.http.get(ENDPOINT.API_URL + 'auth/edit-profile', { headers: headers,
      params: {
        name: name,
        gender: gender,
        dob: dob,
        email: email
    }})
    .pipe(
      tap(res => {
        let user = res;
        this.storage.set('user', user["user"])
        .then(
          () => {
            this.user = user["user"];
          },
          error => console.error('Error storing item', error)
        );
        return res;
      })
    )
  }

  // user() {
  //   const headers = new HttpHeaders({
  //     'Authorization': this.token["token_type"]+" "+this.token["access_token"]
  //   });
  //   return this.http.get<User>(ENDPOINT.API_URL + 'auth/user', { headers: headers })
  //   .pipe(
  //     tap(user => {
  //       return user;
  //     })
  //   )
  // }


  getToken() {
    return this.storage.get('token').then(
      data => {
        this.token = data;
        if(this.token != null) {
          this.isLoggedIn=true;
        } else {
          this.isLoggedIn=false;
        }
        // this.isVerified = this.token["is_verified"];
      },
      error => {
        this.token = null;
        this.isLoggedIn=false;
      }
    );
  }

  clearToken(){
    this.isLoggedIn = false;
    this.token["access_token"] = "";
    this.storage.set('token', this.token)
    .then(
      () => {
        console.log('Token Stored');
      },
      error => console.error('Error storing item', error)
    );
  }

  isUserVerified() {
    const headers = new HttpHeaders({
      'Authorization': this.token["token_type"]+" "+this.token["access_token"]
    });
    return this.http.get(ENDPOINT.API_URL + 'auth/is-user-verified', { headers: headers })
    .pipe(
      tap(token => {
        let tempToken:any = token;
        this.storage.set('token', token)
        .then(
          () => {
            // if( tempToken.is_verified != null )
            //   this.isVerified = tempToken.is_verified;
            // else
            //   this.isVerified = 'false';
            console.log('Token Stored ' + this.isVerified);
          },
          error => console.error('Error storing item', error)
        );
        this.token = token;
        return token;
      })
    );
  }

  checkPassport(){
    const headers = new HttpHeaders({
      'Authorization': this.token["token_type"]+" "+this.token["access_token"]
    });
    return this.http.get(ENDPOINT.API_URL + 'auth/check-passport', { headers: headers })
    .pipe(
      tap(res => {
        let user = res;
        this.storage.set('user', user["user"])
        .then(
          () => {
            this.user = user["user"];
          },
          error => console.error('Error storing item', error)
        );

        return res;
      })
    )
  }






  register(token: String, password: String, confirmPassword: String, appName: String = 'gtopclient') {
    return this.http.post(ENDPOINT.API_URL + 'auth/register',
      { token : token, password: password, password_confirmation: confirmPassword, app_name: appName }
    )
  }

  verifyToken(token: String, appName: String = 'gtopclient') {
    return this.http.post(ENDPOINT.API_URL + 'auth/verify-token',
      { token : token, app_name: appName }
    )
  }


  resetPassword(token: String, password: String, confirmPassword: String, appName: String = 'gtopclient') {
    return this.http.post(ENDPOINT.API_URL + 'auth/reset-password',
      { token : token, password: password, password_confirmation: confirmPassword, app_name: appName }
    )
  }

  verifyPhone(phone: String) {
    return this.http.post(ENDPOINT.API_URL + 'auth/verify-phone',
      { phone : phone }
    )
  }

  isPhoneAvailable(phone: String) {
    return this.http.post(ENDPOINT.API_URL + 'auth/is-phone-available',
      { phone : phone }
    )
  }
}
