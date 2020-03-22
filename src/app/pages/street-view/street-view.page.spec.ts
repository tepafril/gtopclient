import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StreetViewPage } from './street-view.page';

describe('StreetViewPage', () => {
  let component: StreetViewPage;
  let fixture: ComponentFixture<StreetViewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StreetViewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StreetViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
