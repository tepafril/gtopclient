import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ParkingAlarmPage } from './parking-alarm.page';

describe('ParkingAlarmPage', () => {
  let component: ParkingAlarmPage;
  let fixture: ComponentFixture<ParkingAlarmPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParkingAlarmPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ParkingAlarmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
