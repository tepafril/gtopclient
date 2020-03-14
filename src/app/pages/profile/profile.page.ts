import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../services/auth.service';
import { AlertService } from './../../services/alert.service';
import { LanguageService } from 'src/app/services/language.service';
import { NavController, PopoverController } from '@ionic/angular';
import { ChooseLanguagePage } from '../choose-language/choose-language.page';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  httpResponse;

  public name;
  public profile_picture;
  public phone;

  constructor(
    private navCtrl: NavController,
    private authService: AuthService,
    private alertService: AlertService,
    private languageService: LanguageService,
    private popoverController: PopoverController,

  ) {
  }

  ngOnInit() {
  }
  
  ionViewWillEnter(){
    this.name = this.authService.user["name"];
    this.profile_picture = this.authService.user["profile_picture"];
    this.phone = this.authService.user["phone"];
  }

  logout() {
    this.authService.logout().subscribe(
      data => {
        this.httpResponse = data;
      }, err => {
        if( err.error.message ){
          this.alertService.presentToast( err.error.message ,"danger");
        }
        else{
          this.alertService.presentToast( err.message ,"danger");
        }
      }, () => {
        this.alertService.presentToast( this.httpResponse.message ,"danger");
        this.navCtrl.navigateRoot('/landing');
      }
    );
  }


  async chooseLanguage(ev: any) {
    const popover = await this.popoverController.create({
      component: ChooseLanguagePage,
      event: ev,
      translucent: true
    });
    return await popover.present();
  }
  

}
