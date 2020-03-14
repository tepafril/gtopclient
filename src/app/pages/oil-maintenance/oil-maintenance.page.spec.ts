import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OilMaintenancePage } from './oil-maintenance.page';

describe('OilMaintenancePage', () => {
  let component: OilMaintenancePage;
  let fixture: ComponentFixture<OilMaintenancePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OilMaintenancePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OilMaintenancePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
