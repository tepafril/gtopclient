import { Component, OnInit } from '@angular/core';
import { Platform, NavController, AlertController, LoadingController, ModalController } from "@ionic/angular";
import { ActivatedRoute } from '@angular/router';

import { AlertService } from 'src/app/services/alert.service';
import { RequestService } from 'src/app/services/request.service';

import { ManageGroupAssignItemPage } from '../manage-group-assign-item/manage-group-assign-item.page';

@Component({
  selector: 'app-manage-group-single',
  templateUrl: './manage-group-single.page.html',
  styleUrls: ['./manage-group-single.page.scss'],
})
export class ManageGroupSinglePage implements OnInit {

  groupID;
  groupName;

  loading;
  segmentVal = 'user';
  dataList = [];
  groupItems = [];
  httpResponse;
  dateTemp;
  pagination;
  phoneNumber;

  something: string;

  constructor(
    private navCtrl: NavController,
    private alertController: AlertController,
    private activatedRoute: ActivatedRoute,
    private loadingController: LoadingController,
    private alertService: AlertService,
    private requestService: RequestService,
    private modalController: ModalController
  ) { }

  ngOnInit() {
    this.groupID = this.activatedRoute.snapshot.paramMap.get('id');
    this.groupName = this.activatedRoute.snapshot.paramMap.get('name');
  }

  ionViewWillEnter()
  {
    this.segmentVal = "device";
    this.dataList = [];
    this.groupItems = [];
    this.initGroupQuery();
  }

  goBack(){
    this.navCtrl.navigateBack('/manage-group');
  }

  async addUser()
  {
    const alert = await this.alertController.create({
      header: 'Enter user\'s phone number to let them view this group.',
      inputs: [
        {
          name: 'phoneNumber',
          type: "text",
          placeholder: 'User\'s Phone Number'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            
          }
        }, {
          text: 'Add User',
          handler: (data) => {

            this.phoneNumber = data.phoneNumber;
            this.requestService.attachUserToGroup(this.phoneNumber, this.groupID).subscribe(res => {
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
              this.initGroupQuery();
            });

          }
        }
      ]
    });

    await alert.present();
  }

  async detachUser(userID, userName){
    const alert = await this.alertController.create({
      header: 'Do you want to delete ' + userName + '?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
          }
        }, {
          text: 'Delete',
          handler: (data) => {
            this.requestService.detachUserFromGroup(this.groupID, userID).subscribe(res => {
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
              this.initGroupQuery();
            });

          }
        }
      ]
    });

    await alert.present();
  }

  async detachItem(itemID, itemName)
  {
    const alert = await this.alertController.create({
      header: 'Do you want to delete ' + itemName + '?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {

          }
        }, {
          text: 'Delete',
          handler: (data) => {
            this.requestService.detachItemFromGroup(this.groupID, itemID).subscribe(res => {
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
              this.initGroupQuery();
            });

          }
        }
      ]
    });

    await alert.present();
  }

  

  async addItem() 
  {
    const assignItemModal = await this.modalController.create({
      component: ManageGroupAssignItemPage,
      componentProps: {
        groupItems: this.groupItems,
        groupID: this.groupID
      }
    });

    assignItemModal.onDidDismiss().then(()=>{
      this.initGroupQuery();
    }).catch(err => {
      console.log(err);
    });

    return await assignItemModal.present();
  }

  segmentChanged(ev:any)
  {
    this.segmentVal = ev.target.value;
    
    if( this.segmentVal == "user" )
    {
      this.dataList = [];
      this.initGroupQuery();
    }
    else if( this.segmentVal == "device" )
    {
      this.dataList = [];
      this.initGroupQuery();
    }
    else{
      this.dataList = [];
    }
  }


  initGroupQuery()
  {
    this.presentLoading();
    this.groupItems = [];
    this.dataList = [];
    this.pagination = 1;
    if( this.segmentVal == "user" )
    {
        
      this.requestService.getGroupUsers(this.groupID,this.pagination).subscribe(res => {
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
        for( let i = 0; i < this.httpResponse.groups.length; i++ )
        {
          this.httpResponse.groups[i].name = this.httpResponse.groups[i].name + " (" + this.httpResponse.groups[i].phone + ")";
          this.dataList.push(this.httpResponse.groups[i]);
        }
        this.pagination++;
        this.loading.dismiss();
      });

    }
    else
    {
        
      this.requestService.getGroupDevices(this.groupID,this.pagination).subscribe(res => {
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
        for( let i = 0; i < this.httpResponse.groups.length; i++ )
        {
          this.groupItems.push(this.httpResponse.groups[i].id);
          this.httpResponse.groups[i].name = this.httpResponse.groups[i].name + " (" + this.httpResponse.groups[i].plate + ")";
          this.dataList.push(this.httpResponse.groups[i]);
        }
        
        this.pagination++;
        this.loading.dismiss();
      });

    }
  }


  loadData(event) {

    if( this.segmentVal == "user" )
    {
      this.requestService.getGroupUsers(this.groupID,this.pagination).subscribe(res => {
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
        for( let i = 0; i < this.httpResponse.groups.length; i++ )
        {
          this.dataList.push(this.httpResponse.groups[i]);
        }
        
        event.target.complete();

        if (this.httpResponse.length < 40) {
          event.target.disabled = true;
        }

        this.pagination++;
      });
    }
    else
    {
      this.requestService.getGroupDevices(this.groupID,this.pagination).subscribe(res => {
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
        for( let i = 0; i < this.httpResponse.groups.length; i++ )
        {
          this.groupItems.push(this.httpResponse.groups[i].id);
          this.dataList.push(this.httpResponse.groups[i]);
        }
        
        event.target.complete();

        if (this.httpResponse.length < 40) {
          event.target.disabled = true;
        }

        this.pagination++;
      });
    }
  }


  async presentLoading() {
    this.loading = await this.loadingController.create({
      message: 'Please wait',
      duration: 10000
    });
    await this.loading.present();
  }
}
