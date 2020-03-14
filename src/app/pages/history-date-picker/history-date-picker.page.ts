import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { LanguageService } from 'src/app/services/language.service';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-history-date-picker',
  templateUrl: './history-date-picker.page.html',
  styleUrls: ['./history-date-picker.page.scss'],
})
export class HistoryDatePickerPage implements OnInit {

  constructor(
    private popoverController: PopoverController,
    private languageService: LanguageService,
    private helper: HelperService
  ) {
  }

  ngOnInit() {
  }

  async dismissPopover(param)
  {
    await this.popoverController.dismiss( param );
  }

  pickToday()
  {
    let today = new Date();

    let from_date_str = this.helper.phpDateGMT7(today);
    from_date_str += ' 00:00:00';

    let to_date_str = this.helper.phpDateGMT7(today);
    to_date_str += ' ' + this.helper.phpTimeGMT7(today);

    let yesterday_string = { from: from_date_str, to: to_date_str };
    this.dismissPopover( {date_string:yesterday_string} );
  }

  pickYesterday()
  {
    let yesterday = new Date();
    
    let to_date_str = this.helper.phpDateGMT7( yesterday );
    to_date_str += ' 23:59:59';

    yesterday.setDate(yesterday.getDate() - 1);
    let from_date_str = this.helper.phpDateGMT7( yesterday );
    from_date_str += ' 00:00:00';

    let today_string = { from: from_date_str, to: to_date_str };
    this.dismissPopover( {date_string:today_string} );
  }

  pickLast3Days()
  {
    let yesterday = new Date();
    let to_date_str = this.helper.phpDateGMT7( yesterday );
    to_date_str += ' 23:59:59';

    yesterday.setDate(yesterday.getDate() - 3);
    let from_date_str = this.helper.phpDateGMT7( yesterday );
    from_date_str += ' 00:00:00';

    let today_string = { from: from_date_str, to: to_date_str };
    this.dismissPopover( {date_string:today_string} );
  }

  pickLast7Days()
  {
    let yesterday = new Date();

    let to_date_str = this.helper.phpDateGMT7( yesterday );
    to_date_str += ' 23:59:59';

    yesterday.setDate(yesterday.getDate() - 7);
    let from_date_str = this.helper.phpDateGMT7( yesterday );
    from_date_str += ' 00:00:00';

    let today_string = { from: from_date_str, to: to_date_str };
    this.dismissPopover( {date_string:today_string} );
  }

  pickLast30Days()
  {
    let yesterday = new Date();

    let to_date_str = this.helper.phpDateGMT7( yesterday );
    to_date_str += ' 23:59:59';

    yesterday.setDate(yesterday.getDate() - 30);
    let from_date_str = this.helper.phpDateGMT7( yesterday );
    from_date_str += ' 00:00:00';

    let today_string = { from: from_date_str, to: to_date_str };
    this.dismissPopover( {date_string:today_string} );
  }

  pickCustomDate()
  {

  }
}
