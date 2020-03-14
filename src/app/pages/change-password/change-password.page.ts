import { Component, OnInit } from '@angular/core';
import { Platform, NavController, LoadingController } from "@ionic/angular";
import { AuthService } from './../../services/auth.service';
import { AlertService } from './../../services/alert.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.page.html',
  styleUrls: ['./change-password.page.scss'],
})
export class ChangePasswordPage implements OnInit {

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

  goBack(){
    this.navCtrl.navigateBack('dashboard/tabs/profile');
  }

  changePassword(form: NgForm) {
    let password = form.value.password;
    let newPassword = form.value.newPassword;
    let confirmPassword = form.value.confirmPassword;
    if( password.length < 6 ){
      this.alertService.presentToast( "Password must be greater than 6 digits" ,"danger");
      return;
    }
    if( newPassword.length < 6 ){
      this.alertService.presentToast( "New password must be greater than 6 digits" ,"danger");
      return;
    }
    if( newPassword != confirmPassword ){
      this.alertService.presentToast( "Confirmation password does not match." ,"danger");
      return;
    }
    this.presentLoading();
    this.authService.changePassword(password, newPassword, confirmPassword).subscribe(
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
        this.navCtrl.navigateRoot('/landing');
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
