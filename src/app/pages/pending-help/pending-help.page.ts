import { Component, OnInit } from '@angular/core';
import { ModalController, NavController, LoadingController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-pending-help',
  templateUrl: './pending-help.page.html',
  styleUrls: ['./pending-help.page.scss'],
})
export class PendingHelpPage implements OnInit {

  constructor(
    private modalController: ModalController,
    private authService: AuthService,
    private navCtrl: NavController,
  ) {
    this.authService.getToken().then(() => {
      if( !this.authService.isLoggedIn ){
        this.navCtrl.navigateRoot('/landing');
      }
    });
  }

  ngOnInit() {
  }

  dismissModal() {
    this.modalController.dismiss();
  }

}
