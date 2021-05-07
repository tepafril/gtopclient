import { Component, OnInit } from '@angular/core';
import { ModalController, LoadingController, NavParams } from "@ionic/angular";
import { RequestService } from 'src/app/services/request.service';
import { AlertService } from 'src/app/services/alert.service';
import { AuthService } from './../../services/auth.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-select-device',
  templateUrl: './select-device.page.html',
  styleUrls: ['./select-device.page.scss'],
})
export class SelectDevicePage implements OnInit {

  loading;
  httpResponse;
  dataList:any = [];
  pagination = 1;
  userID;
  groupID;
  groupItems;

  currentItems = [];
  selectedItems = [];
  selectItem = 0;
  currentItem = 0;
  selectItems = [];

  segmentVal;

  moduleName;

  selectAll = false;
  
  constructor(
    private authService: AuthService,
    private requestService: RequestService,
    private modalController: ModalController,
    private alertService: AlertService,
    private storageService: StorageService,
    private navParams: NavParams,
    private loadingController: LoadingController
  ) { }

  ngOnInit() {
    this.moduleName = this.navParams.get('moduleName');
  }

  ionViewWillEnter()
  {
    this.presentLoading();

    // Get Current Item from Storage
    this.storageService.setItem().subscribe(res => {
      this.currentItems = [this.storageService.current_item.id];
      this.selectItem = this.storageService.current_item.id;
    },(err) => {
      console.log("Error: " + err);
    }, () => {
      this.segmentVal = 'my-devices';
      this.userID = this.authService.user["id"];
      console.log("userID: "+this.userID);
      console.log("authService: "+this.authService.user);
      this.initGroupQuery();
    });

  }

  dismiss()
  {

    let item = [];
    for( let i = 0; i < this.dataList.length; i++ )
    {
     
      for( let j = 0; j < this.selectItems.length; j++ )
      {
        if( this.selectItems[j] == this.dataList[i].id )
        {
          item.push(this.dataList[i]);
        }
      }

    }
    
    if( this.selectItem > 0)
    {
      this.dataList = [];
      this.pagination = 1;
      this.selectedItems = [];
      this.modalController.dismiss(item);
    }
    else
    {
      alert("Please select a device!");
    }
  }

  async presentLoading() {
    this.loading = await this.loadingController.create({
      message: 'Please wait',
      duration: 10000
    });
    await this.loading.present();
  }

  initGroupQuery()
  {
    this.dataList = [];
    this.pagination = 1;
    this.selectedItems = [];
    this.requestService.getUserItems(this.pagination).subscribe(res => {
      this.httpResponse = res;
    }, err => {
      if( err.error.message ){
        this.alertService.presentToast( err.error.message ,"danger");
      }
      else{
        this.alertService.presentToast( err.message ,"danger");
      }
      this.loading.dismiss();
    }, ()=>{
      for( let i = 0; i < this.httpResponse.items.length; i++ )
      {

        switch( this.moduleName )
        {
          case "module_geolocation":
            if(this.httpResponse.items[i].module_geolocation == 0)
              this.httpResponse.items[i].isDisabled = true;
          break;

          case "module_history":
            if(this.httpResponse.items[i].module_history == 0)
              this.httpResponse.items[i].isDisabled = true;
          break;

          case "module_ignition":
            if(this.httpResponse.items[i].module_ignition == 0)
              this.httpResponse.items[i].isDisabled = true;
          break;

          case "module_parking":
            if(this.httpResponse.items[i].module_parking == 0)
              this.httpResponse.items[i].isDisabled = true;
          break;

          case "module_trip":
            if(this.httpResponse.items[i].module_trip == 0)
              this.httpResponse.items[i].isDisabled = true;
          break;

          case "module_oil":
            if(this.httpResponse.items[i].module_oil == 0)
              this.httpResponse.items[i].isDisabled = true;
          break;

          case "module_tire":
            if(this.httpResponse.items[i].module_tire == 0)
              this.httpResponse.items[i].isDisabled = true;
          break;

          case "module_speed":
            if(this.httpResponse.items[i].module_speed == 0)
              this.httpResponse.items[i].isDisabled = true;
          break;

          case "module_summary":
            if(this.httpResponse.items[i].module_summary == 0)
              this.httpResponse.items[i].isDisabled = true;
          break;

          case "module_icon":
            if(this.httpResponse.items[i].module_icon == 0)
              this.httpResponse.items[i].isDisabled = true;
          break;

          default:
            this.httpResponse.items[i].isDisabled = false;
          break;
        }

        this.httpResponse.items[i].isChecked = false;
        for( let j = 0; j < this.currentItems.length; j++)
        {
          if( this.httpResponse.items[i].id == this.currentItems[j] )
          {
            this.selectedItems.push(this.httpResponse.items[i].id);
            this.httpResponse.items[i].isChecked = true;
          }
        }
        this.dataList.push(this.httpResponse.items[i]);
      }
      this.pagination++;
      this.loading.dismiss();
    });
  }

  loadData(event) {

    this.requestService.getGroup(this.userID,this.pagination).subscribe(res => {
      this.httpResponse = res;
    }, err => {
      if( err.error.message ){
        this.alertService.presentToast( err.error.message ,"danger");
      }
      else{
        this.alertService.presentToast( err.message ,"danger");
      }
      this.loading.dismiss();
    }, ()=>{
      for( let i = 0; i < this.httpResponse.items.length; i++ )
      {
        this.httpResponse.items[i].isChecked = false;
        for( let j = 0; j < this.currentItems.length; j++)
        {
          if( this.httpResponse.items[i].id == this.currentItems[j] )
          {
            this.selectedItems.push(this.httpResponse.items[i].id);
            this.httpResponse.items[i].isChecked = true;
          }
        }
        this.dataList.push(this.httpResponse.items[i]);
      }
      
      event.target.complete();

      if (this.httpResponse.length < 40) {
        event.target.disabled = true;
      }

      this.pagination++;
    });
  }

  ionSelect( itemID ){
    this.currentItem = this.selectItem;
    this.addOrRemoveSelectItems(itemID);
  }


  addOrRemoveSelectItems(value) {
    var index = this.selectItems.indexOf(value);

    if (index === -1) {
        this.selectItems.push(value);
    } else {
      this.selectItems.splice(index, 1);
    }
  }

  toggleSelectAll()
  {
    this.selectAll = !this.selectAll;
  }

  onChange(event, itemID){
    
    for( let i=0; i<this.dataList.length; i++ )
    {
      if( itemID != this.dataList[i].id )
        this.dataList[i].isChecked = false;
      else
        this.dataList[i].isChecked = true;
    }
    
  }



  segmentChanged(ev:any)
  {
    this.segmentVal = ev.target.value;
    
    if( this.segmentVal == "today" )
    {
      
    }
    else if( this.segmentVal == "yesterday" )
    {
      
    }
    else{
      
    }
  }

}
