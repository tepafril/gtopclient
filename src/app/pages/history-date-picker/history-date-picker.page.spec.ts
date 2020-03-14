import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HistoryDatePickerPage } from './history-date-picker.page';

describe('HistoryDatePickerPage', () => {
  let component: HistoryDatePickerPage;
  let fixture: ComponentFixture<HistoryDatePickerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoryDatePickerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HistoryDatePickerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
