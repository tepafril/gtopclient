import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TireMaintenancePage } from './tire-maintenance.page';

describe('TireMaintenancePage', () => {
  let component: TireMaintenancePage;
  let fixture: ComponentFixture<TireMaintenancePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TireMaintenancePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TireMaintenancePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
