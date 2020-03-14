import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController } from '@ionic/angular';
import { SafariViewController } from '@ionic-native/safari-view-controller/ngx';


@Component({
  selector: 'app-traffic',
  templateUrl: './traffic.page.html',
  styleUrls: ['./traffic.page.scss'],
})

export class TrafficPage implements OnInit {

  constructor(
    public loadingController: LoadingController, 
    private navCtrl: NavController,
    private safariViewController: SafariViewController
  ) {
    
  }
  // options : InAppBrowserOptions = {
  //   location : 'no',//Or 'no' 
  //   hidden : 'no', //Or  'yes'
  //   closebuttoncaption : 'Close',
  //   presentationstyle: 'formsheet'
  // }

  ngOnInit() {
  }

  openInAppBrowser(){
    this.safariViewController.isAvailable()
    .then((available: boolean) => {
        if (available) {

          this.safariViewController.show({
            url: 'https://www.ezecom.com.kh/media-center/live-traffic-camera',
            hidden: false,
            animated: true,
            transition: 'slide',
            enterReaderModeIfAvailable: true,
            tintColor: '#1877f2'
          })
          .subscribe((result: any) => {
              if(result.event === 'opened') console.log('Opened');
              else if(result.event === 'loaded') console.log('Loaded');
              else if(result.event === 'closed') console.log('Closed');
            },
            (error: any) => console.error(error)
          );

        } else {
          // use fallback browser, example InAppBrowser
        }
      }
    );
  }


  // test1(){
  //   const browser = this.iab.create('https://www.ezecom.com.kh/media-center/live-traffic-camera','_blank',this.options);
  //   browser.on('loadstop').subscribe(event => {
  //     browser.insertCSS({ code: ".locationMap, #myMap, .zopim, .EZECOM-logo, .language, .container-fluid{display:none;}" });
  //   });
  // }
  // test2(){
  //   const browser = this.iab.create('https://www.ezecom.com.kh/media-center/live-traffic-camera','_blank',this.options);
  //   browser.on('loadstop').subscribe(event => {
  //     browser.insertCSS({ code: ".locationMap, #myMap, .zopim, .EZECOM-logo, .language, .container-fluid{display:none;}" });
  //   });
  // }
  // test3(){
  //   const browser = this.iab.create('https://www.ezecom.com.kh/media-center/live-traffic-camera','_blank',this.options);
  //   browser.on('loadstop').subscribe(event => {
  //     browser.insertCSS({ code: ".locationMap, #myMap, .zopim, .EZECOM-logo, .language, .container-fluid{display:none;}" });
  //   });
  // }
}
