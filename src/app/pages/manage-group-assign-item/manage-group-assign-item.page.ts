import { Component, OnInit } from '@angular/core';
import { ModalController, LoadingController, NavParams } from "@ionic/angular";
import { RequestService } from 'src/app/services/request.service';
import { AlertService } from 'src/app/services/alert.service';
import { AuthService } from './../../services/auth.service';

@Component({
  selector: 'app-manage-group-assign-item',
  templateUrl: './manage-group-assign-item.page.html',
  styleUrls: ['./manage-group-assign-item.page.scss'],
})
export class ManageGroupAssignItemPage implements OnInit {

  loading;
  httpResponse;
  dataList:any = [];
  pagination = 1;
  userID;
  groupID;
  groupItems;

  constructor(
    private authService: AuthService,
    private modalController: ModalController,
    private requestService: RequestService,
    private alertService: AlertService,
    private navParams: NavParams,
    private loadingController: LoadingController
  ) { }

  ngOnInit()
  {
    this.presentLoading();
    this.groupItems = this.navParams.get('groupItems');
    this.groupID = this.navParams.get('groupID');
  }

  ionViewWillEnter()
  {
    this.userID = this.authService.user["id"];
    this.initGroupQuery();
  }

  dismiss()
  {
    this.modalController.dismiss();
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
        this.httpResponse.items[i].isAttached = false;
        for( let j = 0; j < this.groupItems.length; j++)
        {
          if( this.httpResponse.items[i].id == this.groupItems[j] )
          {
            this.httpResponse.items[i].isAttached = true;
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
        this.httpResponse.items[i].isAttached = false;
        for( let j = 0; j < this.groupItems.length; j++)
        {
          if( this.httpResponse.items[i].id == this.groupItems[j] )
          {
            this.httpResponse.items[i].isAttached = true;
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

  attachItem(itemID){
    this.requestService.attachItemToGroup(itemID, this.groupID).subscribe(res => {
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
      this.dismiss();
    });
  }

}
