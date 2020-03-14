import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Storage } from '@ionic/storage';

const LANGUAGE_KEY = 'en';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  currentLocale = '';
  constructor(
    private translate: TranslateService,
    private storage: Storage
  ) { }

  initAppLanguage(){
    let language = this.translate.getBrowserLang();
    this.translate.setDefaultLang('en');

    this.storage.get(LANGUAGE_KEY).then(val =>{
      if(val){
        this.setLanguage(val);
        this.currentLocale = val;
      }
    });
  }

  getLanguages(){
    return[
      { text: 'English',  value: 'en', img: '' },
      { text: 'Khmer',    value: 'kh', img: '' },
      { text: 'Chinese',  value: 'zh', img: '' },
    ]
  }

  setLanguage(language){
    this.translate.use(language);
    this.currentLocale = language;
    this.storage.set(LANGUAGE_KEY, language);
  }
}
