import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HttpClient }    from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';
import { Badge } from '@ionic-native/badge/ngx';
import { OneSignal } from '@ionic-native/onesignal/ngx';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { SafariViewController } from '@ionic-native/safari-view-controller/ngx';
import { LaunchNavigator } from '@ionic-native/launch-navigator/ngx';

import { SelectDevicePage } from './pages/select-device/select-device.page';
import { FormsModule } from '@angular/forms'; 
import { ChooseLanguagePage } from './pages/choose-language/choose-language.page';

import { AngularFireModule } from '@angular/fire';
import { ENV } from '../environments/environment';

import { FirebaseAuthentication } from '@ionic-native/firebase-authentication/ngx';

import { Geolocation } from '@ionic-native/geolocation/ngx';

export function createTranslateLoader(http: HttpClient){
  return new TranslateHttpLoader(http, './assets/i18n/','.json');
}

@NgModule({
  declarations: [AppComponent,ChooseLanguagePage,SelectDevicePage],
  entryComponents: [ChooseLanguagePage,SelectDevicePage],
  imports: [
    FormsModule,
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(ENV.FIREBASE, 'test'),
    HttpClientModule,
    IonicStorageModule.forRoot(),
    NgxQRCodeModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    Geolocation,
    LaunchNavigator,
    SafariViewController,
    StatusBar,
    SplashScreen,
    Badge,
    FirebaseAuthentication,
    OneSignal,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
