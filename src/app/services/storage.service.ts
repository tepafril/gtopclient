import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { AuthService } from 'src/app/services/auth.service';
import { ENDPOINT } from '../../environments/environment';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  public current_item = null;


  constructor(
    private http: HttpClient,
    private storage: Storage,
    private authService: AuthService,
  ) {}


  getItem() {
    return this.storage.get('item').then(
      data => {
        this.current_item = data;
      },
      error => {
        this.current_item = null;
      }
    );
  }


  setItem(passItem = null) {
    if( passItem == null )
    {
      const headers = new HttpHeaders({
        'Authorization': this.authService.token["token_type"]+" "+this.authService.token["access_token"]
      });
      return this.http.get(ENDPOINT.API_URL + 'item/default', {headers:headers}).pipe(
        tap(res => {
          this.storage.set('item', res)
          .then(
            () => {
              console.log(res);
            },
            error => console.error('Error storing item', error)
          );
          this.current_item = res;
          console.log(this.current_item);
          return res;
        }),
      );
    }
    else{
      this.storage.set('item', passItem)
      .then(
        () => {},
        error => console.error('Error storing item', error)
      );
      this.current_item = passItem;
    }
  }

}
