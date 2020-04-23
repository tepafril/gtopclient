import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PolygonfencePage } from './polygonfence.page';

describe('PolygonfencePage', () => {
  let component: PolygonfencePage;
  let fixture: ComponentFixture<PolygonfencePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolygonfencePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PolygonfencePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
