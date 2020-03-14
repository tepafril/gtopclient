import { Component, OnInit } from '@angular/core';
import { Platform, NavController, AlertController, ModalController } from "@ionic/angular";
import { StorageService } from 'src/app/services/storage.service';
import { RequestService } from 'src/app/services/request.service';
import { LoadingController } from '@ionic/angular';
import { AlertService } from 'src/app/services/alert.service';
import { ENDPOINT } from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from 'src/app/services/auth.service';
import { SelectDevicePage } from '../select-device/select-device.page';


import { Crop } from '@ionic-native/crop/ngx';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';


@Component({
  selector: 'app-manage-icon',
  templateUrl: './manage-icon.page.html',
  styleUrls: ['./manage-icon.page.scss'],
})
export class ManageIconPage implements OnInit {

  httpResponse;
  loading;
  deviceID;
  item_name;
  item_icon;
  item_photo = '';
  itemList = [
    {"icon_name" : "car-01", "icon_size": 40 },
    {"icon_name" : "car-02", "icon_size": 40 },
    {"icon_name" : "car-03", "icon_size": 40 },
    {"icon_name" : "car-04", "icon_size": 40 },
    {"icon_name" : "car-05", "icon_size": 40 },
    {"icon_name" : "car-06", "icon_size": 40 },
    {"icon_name" : "car-07", "icon_size": 40 },
    {"icon_name" : "car-08", "icon_size": 40 },
    {"icon_name" : "car-09", "icon_size": 40 },
    {"icon_name" : "car-10", "icon_size": 40 },
    {"icon_name" : "car-11", "icon_size": 40 },
    {"icon_name" : "car-12", "icon_size": 40 },
    {"icon_name" : "car-13", "icon_size": 40 },
    {"icon_name" : "car-14", "icon_size": 40 },
    {"icon_name" : "car-15", "icon_size": 40 },
    {"icon_name" : "car-16", "icon_size": 40 },
    {"icon_name" : "car-17", "icon_size": 40 },
    {"icon_name" : "car-18", "icon_size": 40 },
    {"icon_name" : "car-19", "icon_size": 40 },
    {"icon_name" : "car-20", "icon_size": 40 },
    {"icon_name" : "car-21", "icon_size": 40 },
    {"icon_name" : "car-22", "icon_size": 40 },
    {"icon_name" : "car-23", "icon_size": 40 },
    {"icon_name" : "car-24", "icon_size": 40 },
    {"icon_name" : "car-25", "icon_size": 40 },
    {"icon_name" : "car-26", "icon_size": 40 },
    {"icon_name" : "car-27", "icon_size": 40 },
    {"icon_name" : "car-28", "icon_size": 40 },

    {"icon_name" : "truck-01", "icon_size": 60 },
    {"icon_name" : "truck-02", "icon_size": 60 },
    {"icon_name" : "truck-03", "icon_size": 60 },
    {"icon_name" : "truck-04", "icon_size": 60 },
    {"icon_name" : "truck-05", "icon_size": 60 },
    {"icon_name" : "truck-06", "icon_size": 60 },
    {"icon_name" : "truck-07", "icon_size": 60 },
    {"icon_name" : "truck-08", "icon_size": 60 },
    {"icon_name" : "truck-09", "icon_size": 60 },
    {"icon_name" : "truck-10", "icon_size": 60 },
    {"icon_name" : "truck-11", "icon_size": 60 },
    {"icon_name" : "truck-12", "icon_size": 60 },
    {"icon_name" : "truck-13", "icon_size": 60 },
    {"icon_name" : "truck-14", "icon_size": 60 },
    {"icon_name" : "truck-15", "icon_size": 60 },
    {"icon_name" : "truck-16", "icon_size": 60 },
    {"icon_name" : "truck-17", "icon_size": 60 },
    {"icon_name" : "truck-18", "icon_size": 60 },
    {"icon_name" : "truck-19", "icon_size": 60 },
    {"icon_name" : "truck-20", "icon_size": 60 },
    {"icon_name" : "truck-21", "icon_size": 60 },
    {"icon_name" : "truck-22", "icon_size": 60 },
    {"icon_name" : "truck-23", "icon_size": 60 },
    {"icon_name" : "truck-24", "icon_size": 60 },
    {"icon_name" : "truck-25", "icon_size": 60 },
    {"icon_name" : "truck-26", "icon_size": 60 },
    {"icon_name" : "truck-27", "icon_size": 60 },

    {"icon_name" : "bike-01", "icon_size": 40 },
    {"icon_name" : "bike-02", "icon_size": 40 },
    {"icon_name" : "bike-03", "icon_size": 40 },
    {"icon_name" : "bike-04", "icon_size": 40 },
    {"icon_name" : "bike-05", "icon_size": 40 },
    {"icon_name" : "bike-06", "icon_size": 40 },
    {"icon_name" : "bike-07", "icon_size": 40 },
    {"icon_name" : "bike-08", "icon_size": 40 },
    {"icon_name" : "bike-09", "icon_size": 40 },
    {"icon_name" : "bike-10", "icon_size": 40 },
    {"icon_name" : "bike-11", "icon_size": 40 },
    {"icon_name" : "bike-12", "icon_size": 40 },
    {"icon_name" : "bike-13", "icon_size": 40 },
    {"icon_name" : "bike-14", "icon_size": 40 },
    {"icon_name" : "bike-15", "icon_size": 40 },
    {"icon_name" : "bike-16", "icon_size": 40 },
    {"icon_name" : "bike-17", "icon_size": 40 },
    {"icon_name" : "bike-18", "icon_size": 40 },

    {"icon_name" : "tricycle-01", "icon_size": 40 },
    {"icon_name" : "tricycle-02", "icon_size": 40 },
    {"icon_name" : "tricycle-03", "icon_size": 40 },
    {"icon_name" : "tricycle-04", "icon_size": 40 },
    {"icon_name" : "tricycle-05", "icon_size": 40 },
    {"icon_name" : "tricycle-06", "icon_size": 40 },
    {"icon_name" : "tricycle-07", "icon_size": 40 },

    {"icon_name" : "boat-01", "icon_size": 40 },
    {"icon_name" : "boat-02", "icon_size": 40 },
    {"icon_name" : "boat-03", "icon_size": 60 },
    {"icon_name" : "boat-04", "icon_size": 60 },

    {"icon_name" : "plane-01", "icon_size": 60 },
    {"icon_name" : "plane-02", "icon_size": 60 },
    {"icon_name" : "plane-03", "icon_size": 60 },
  ];


  selectedItems;

  current_item;

  constructor(
    private navCtrl: NavController,
    private storageService: StorageService,
    public loadingController: LoadingController,
    private requestService: RequestService,
    private alertService: AlertService,
    private imagePicker: ImagePicker,
    private crop: Crop,
    private http: HttpClient,
    private transfer: FileTransfer,
    private authService: AuthService,
    private modalController: ModalController
  ) { }

  async selectDevice()
  {
    const assignItemModal = await this.modalController.create({
      component: SelectDevicePage,
      componentProps: {
        // groupItems: this.groupItems,
        // groupID: this.groupID
        moduleName: "module_icon"
      }
    });

    assignItemModal.onDidDismiss().then((res)=>{
      this.selectedItems = res.data;
      
      // Present Preloading
      this.storageService.setItem().subscribe(res => {
      },(err) => {
        console.log(err);
      }, () => {
        this.current_item = this.selectedItems;
        this.deviceID = this.current_item.deviceid;
        this.item_name = this.current_item.name;
        this.item_icon = this.current_item.icon_name;
        if( this.current_item.photo != '' )
          this.item_photo = ENDPOINT.IMAGE.THUMBNAIL + this.current_item.photo;
      });

      

    }).catch(err => {
      console.log(err);
    });

    return await assignItemModal.present();
  }

  ngOnInit() {
    this.storageService.setItem().subscribe(res => {
    },(err) => {
      console.log(err);
    }, () => {
      this.current_item = this.storageService.current_item;
      this.deviceID = this.current_item.deviceid;
      this.item_name = this.current_item.name;
      this.item_icon = this.current_item.icon_name;
      if( this.current_item.photo != '' )
        this.item_photo = ENDPOINT.IMAGE.THUMBNAIL + this.current_item.photo;
    });
  }

  changeIcon( iconName, iconSize ){
    this.presentLoadingWithOptions();
    this.item_icon = iconName;
    this.item_icon = iconName;
    this.requestService.setIcon(this.deviceID, iconName, iconSize).subscribe( res =>{
      // status ok
      this.httpResponse = res;
    }, err=> {
      if( err.error.message ){
        this.alertService.presentBottomToast( err.error.message ,"danger");
      }
      else{
        this.alertService.presentBottomToast( err.message ,"danger");
      }
      this.loading.dismiss();
    }, () => {
      this.loading.dismiss();
      this.alertService.presentBottomToast( this.httpResponse.message ,"success");

      this.deviceID = this.current_item.deviceid;
      this.item_name = this.current_item.name;
      this.item_icon = this.current_item.icon_name;
      this.item_photo = '';
    });
  }

  cropUpload() {
    this.imagePicker.getPictures({ maximumImagesCount: 1, outputType: 0 }).then((results) => {
      for (let i = 0; i < results.length; i++) {
          this.crop.crop(results[i], { quality: 60, targetHeight:1000 })
            .then(
              newImage => {
                this.presentLoadingWithOptions();

                const headers = { 'Authorization': this.authService.token["token_type"]+" "+this.authService.token["access_token"] };

                const fileTransfer: FileTransferObject = this.transfer.create();
                const uploadOpts: FileUploadOptions = {
                   fileKey: 'file',
                   fileName: newImage.substr(newImage.lastIndexOf('/') + 1),
                   httpMethod: 'POST',
                   headers: headers,
                   params: { deviceid: this.deviceID }
                };
  
                fileTransfer.upload(newImage, ENDPOINT.API_URL + 'item/set-photo', uploadOpts)
                  .then((data) => {
                    this.httpResponse = data;
                    this.loading.dismiss();

                    this.storageService.setItem(this.httpResponse.item).subscribe(res => {
                    },(err) => {
                      console.log(err);
                    }, () => {
                      this.deviceID = this.storageService.current_item.deviceid;
                      this.item_name = this.storageService.current_item.name;
                      this.item_icon = this.storageService.current_item.icon_name;
                      this.item_photo = ENDPOINT.IMAGE.THUMBNAIL + this.storageService.current_item.photo;
                      alert(this.item_photo);
                    });
                  }, (err) => {
                   console.log("ERROR: ",err);
                 });
              },
              error => console.error('Error cropping image', error)
            );
      }
    }, (err) => { console.log(err); });
  }

  goBack(){
    this.navCtrl.navigateBack('dashboard/tabs/home');
  }

  private async presentLoadingWithOptions() {
    this.loading = await this.loadingController.create({
      duration: 15000,
      message: 'Please wait...',
      translucent: true,
      cssClass: 'custom-class custom-loading'
    });
    return await this.loading.present();
  }

}