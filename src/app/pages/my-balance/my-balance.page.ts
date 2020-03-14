import { Component, OnInit } from '@angular/core';
import { Platform, NavController, AlertController } from "@ionic/angular";

@Component({
  selector: 'app-my-balance',
  templateUrl: './my-balance.page.html',
  styleUrls: ['./my-balance.page.scss'],
})
export class MyBalancePage implements OnInit {

  reg_date = '01/Jan/2020'

  constructor(
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  goBack(){
    this.navCtrl.navigateBack('dashboard/tabs/profile');
  }

}
