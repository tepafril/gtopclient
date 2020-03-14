import { Component, OnInit } from '@angular/core';
import { Platform, NavController, AlertController } from "@ionic/angular";

@Component({
  selector: 'app-notification',
  templateUrl: './notification.page.html',
  styleUrls: ['./notification.page.scss'],
})
export class NotificationPage implements OnInit {

  constructor(
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  goBack(){
    // this.navCtrl.navigateBack('dashboard/tabs/home');
    this.navCtrl.back();
  }

}
