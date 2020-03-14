import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-support',
  templateUrl: './support.page.html',
  styleUrls: ['./support.page.scss'],
})
export class SupportPage implements OnInit {

  constructor(
    public loadingController: LoadingController,
    private navCtrl: NavController
  ) {
    
  }

  ngOnInit() {
  }

  undercontruction(){
    alert('Sorry the page is still undercontruction');
  }
}
