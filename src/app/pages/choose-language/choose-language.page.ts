import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-choose-language',
  templateUrl: './choose-language.page.html',
  styleUrls: ['./choose-language.page.scss'],
})
export class ChooseLanguagePage implements OnInit {

  constructor(
    private popoverController: PopoverController,
    private languageService: LanguageService
  ) {
  }

  ngOnInit() {
  }

  async dismissPopover() {
    await this.popoverController.dismiss();
  }

  setLanguage(lang){
    this.languageService.setLanguage(lang);
    this.dismissPopover();
  }

}
