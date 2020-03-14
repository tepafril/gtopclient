import { Component, OnInit } from '@angular/core';
import { Platform, NavController, AlertController, LoadingController } from "@ionic/angular";
import { StorageService } from 'src/app/services/storage.service';
import { TranslateService } from '@ngx-translate/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AlertService } from 'src/app/services/alert.service';
import { AuthService } from './../../services/auth.service';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-manage-group',
  templateUrl: './manage-group.page.html',
  styleUrls: ['./manage-group.page.scss'],
})
export class ManageGroupPage implements OnInit {

  public groupName = '';
  public loading;
  httpResponse;
  dataList:any = [];
  pagination = 1;
  userID;

  constructor(
    private authService: AuthService,
    private navCtrl: NavController,
    private alertController: AlertController,
    private loadingController: LoadingController,
    private alertService: AlertService,
    private storageService: StorageService,
    private requestService: RequestService
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.userID = this.authService.user["id"];
    this.initGroupQuery();
  }


  initGroupQuery(){
    this.presentLoading();
    this.dataList = [];
    this.pagination = 1;
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
      for( let i = 0; i < this.httpResponse.groups.length; i++ )
      {
        this.dataList.push(this.httpResponse.groups[i]);
      }
      console.log(this.dataList);
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


  goBack(){
    this.navCtrl.navigateBack('dashboard/tabs/home');
  }

  async addGroup()
  {
    const alert = await this.alertController.create({
      header: 'Enter group name!',
      inputs: [
        {
          name: 'groupName',
          type: "text",
          placeholder: 'Group Name'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Create',
          handler: (data) => {

            this.groupName = data.groupName;
            this.requestService.createGroup(this.groupName).subscribe(res => {
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

  async deleteGroup(groupID, groupName)
  {
    const alert = await this.alertController.create({
      header: 'Do you want to delete ' + groupName + '?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Delete',
          handler: (data) => {
            this.requestService.deleteGroup(groupID).subscribe(res => {
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

  async editGroup(groupID, groupName)
  {
    const alert = await this.alertController.create({
      header: 'Enter group name!',
      inputs: [
        {
          name: 'groupName',
          type: "text",
          placeholder: 'Group Name',
          value: groupName
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Update',
          handler: (data) => {

            this.groupName = data.groupName;
            this.requestService.updateGroup(groupID, this.groupName).subscribe(res => {
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

  async presentLoading() {
    this.loading = await this.loadingController.create({
      message: 'Please wait',
      duration: 10000
    });
    await this.loading.present();
  }
}
