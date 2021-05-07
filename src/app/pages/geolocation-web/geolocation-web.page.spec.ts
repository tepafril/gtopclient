import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GeolocationWebPage } from './geolocation-web.page';

describe('GeolocationWebPage', () => {
  let component: GeolocationWebPage;
  let fixture: ComponentFixture<GeolocationWebPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeolocationWebPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GeolocationWebPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
