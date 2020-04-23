import { Component, OnInit } from '@angular/core';
import { Platform, NavController, ModalController } from "@ionic/angular";

@Component({
  selector: 'app-polygonfence',
  templateUrl: './polygonfence.page.html',
  styleUrls: ['./polygonfence.page.scss'],
})
export class PolygonfencePage implements OnInit {

  constructor(
    private navCtrl: NavController, 
  ) { }

  ngOnInit() {
  }

  goBack(){
    this.navCtrl.navigateBack('dashboard/tabs/home');
  }

}
