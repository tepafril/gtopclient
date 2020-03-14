import { Component, OnInit } from '@angular/core';
import { Platform, NavController, AlertController, LoadingController } from "@ionic/angular";
import { AuthService } from './../../services/auth.service';
import { AlertService } from './../../services/alert.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {

  phone;
  name;
  gender;
  dob;
  email;
  httpResponse;
  loading;

  constructor(
    private navCtrl: NavController,
    private authService: AuthService,
    private alertService: AlertService,
    private loadingController: LoadingController
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.phone = this.authService.user.phone;
    this.name = this.authService.user.name;
    this.gender = this.authService.user.gender;
    this.dob = this.authService.user.dob;
    this.email = this.authService.user.email;
  }

  goBack(){
    this.navCtrl.navigateBack('dashboard/tabs/profile');
  }

  editProfile(form: NgForm) {
    let name = form.value.name;
    let gender = form.value.gender;
    let dob = form.value.dob;
    let email = form.value.email;

    this.presentLoading();
    this.authService.editProfile(name, gender, dob, email).subscribe(
      data => {
        this.httpResponse = data;
      }, err => {
        if( err.error.message ){
          this.alertService.presentToast( err.error.message ,"danger");
        }
        else{
          this.alertService.presentToast( err.message ,"danger");
        }
        this.loading.dismiss();
      }, () => {
        this.alertService.presentToast( this.httpResponse.message ,"success");
        this.name = this.authService.user.name;
        this.gender = this.authService.user.gender;
        this.dob = this.authService.user.dob;
        this.email = this.authService.user.email;
        this.loading.dismiss();
      }
    );
  }

  async presentLoading() {
    this.loading = await this.loadingController.create({
      message: 'Please wait',
      duration: 10000
    });
    await this.loading.present();
  }

}
