import { Component, OnInit } from '@angular/core';
import { ModalController, NavController, LoadingController } from '@ionic/angular';
import { PendingHelpPage } from '../pending-help/pending-help.page';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-pending',
  templateUrl: './pending.page.html',
  styleUrls: ['./pending.page.scss'],
})
export class PendingPage implements OnInit {

  qrcElementType : 'url' | 'canvas' | 'img' = 'url';
  qrcValue : string = 'Techiediaries';
  qrcWidth : string = '200';
  httpResponse: any;
  phone;

  constructor(
    private modalController: ModalController,
    private authService: AuthService,
    private navCtrl: NavController,
  ) {
    this.authService.getToken().then(() => {
      this.qrcValue = "userid:" + this.authService.user.id;
      this.phone = this.authService.user.phone;
    });
  }

  ngOnInit() {
  }

  goBack(){
    this.navCtrl.back();
  }

  // async help() {
  //   const helpModal = await this.modalController.create({
  //     component: PendingHelpPage
  //   });
  //   return await helpModal.present();
  // }

  // continue(){
  //   this.authService.isUserVerified().subscribe( data => {
  //     this.httpResponse = data;
      // if(this.httpResponse.is_verified == 'true'){
      //   this.navCtrl.navigateRoot('/dashboard');
      // }
  //   }, err => {

  //   }, () => {
  //   });
  // }

}
