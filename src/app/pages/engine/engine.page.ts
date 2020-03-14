import { Component, OnInit } from '@angular/core';
import { Platform, NavController, AlertController, ModalController } from "@ionic/angular";
import { LoadingController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { StorageService } from 'src/app/services/storage.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { ENDPOINT } from '../../../environments/environment';
import { AlertService } from 'src/app/services/alert.service';
import { SelectDevicePage } from '../select-device/select-device.page';

@Component({
  selector: 'app-engine',
  templateUrl: './engine.page.html',
  styleUrls: ['./engine.page.scss'],
})
export class EnginePage implements OnInit {

  loading:any;
  status;
  httpResponse;

  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private navCtrl: NavController,
    public loadingController: LoadingController,
    public alertController: AlertController,
    private alertService: AlertService,
    private storageService: StorageService,
    private modalController: ModalController
    ) {
  }

  ngOnInit()
  {
    this.storageService.setItem().subscribe(res => {
      this.current_item = this.storageService.current_item;
      this.deviceIcon =  this.current_item.icon_name;
      this.deviceIconSize =  this.current_item.icon_size;
      this.devicePlateNumber = this.current_item.plate;
    },(err) => {
      console.log(err);
    }, () => {

    });
  }

  goBack(){
    this.navCtrl.navigateBack('dashboard/tabs/home');
  }

  sendCommandEngineOnOff(status,password, deviceid)
  {
    this.presentLoadingWithOptions();

    this.preparingCommand(status, password, deviceid).subscribe(
      data => {
        this.httpResponse = data;
        this.loading.dismiss();
      },err => {
        if( err.error.message )
          this.alertService.presentToast("<ion-text>" + err.error.message + "</ion-text>","danger");
        else
          this.alertService.presentToast("<ion-text>" + err.message + "</ion-text>","danger");
        this.loading.dismiss();
      },
      () => {
        this.alertService.presentToast("<ion-text>" + this.httpResponse.message + "</ion-text>","success");
        this.loading.dismiss();
      }
    );
  }

  async presentPasswordPrompt(status)
  {
    this.status = status;
    const passwordPrompt = await this.alertController.create({
      header: 'Please enter your password',
      inputs: [
        {
          name: 'password',
          type: 'password'
        }],    
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: (alertData) => { //takes the data 
            let password = alertData.password;
            if( password.length < 6 )
            {
              alert("Password should be greater than 6 digits.");
            }
            else{
              this.sendCommandEngineOnOff(this.status,password,this.current_item.deviceid);
            }
          }
        }
      ]
    });
    await passwordPrompt.present();
  }

  async presentLoadingWithOptions() {
    this.loading = await this.loadingController.create({
      duration: 15000,
      message: 'Please wait...',
      translucent: true,
      cssClass: 'custom-class custom-loading'
    });
    return await this.loading.present();
  }


  preparingCommand(command, password, deviceid)
  {
    this.authService.getToken();
    let token = this.authService.token;

    const headers = new HttpHeaders({
      'Authorization': token["token_type"]+" "+token["access_token"]
    });

    return this.http.get(ENDPOINT.API_URL + 'command/send/traccar/' + command + '/' + password + "/" + this.current_item.deviceid, { headers: headers })
    .pipe(
      tap(data => {
        return data;
      })
    );
  }

  current_item;
  deviceIcon;
  deviceIconSize;

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

      // Get Current Item from Storage
      this.current_item = this.selectedItems;
      this.deviceIcon =  this.current_item.icon_name;
      this.deviceIconSize =  this.current_item.icon_size;
      this.devicePlateNumber = this.current_item.plate;
    }).catch(err => {
      console.log(err);
    });

    return await assignItemModal.present();
  }

}
