import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DisarmPage } from './disarm.page';

describe('DisarmPage', () => {
  let component: DisarmPage;
  let fixture: ComponentFixture<DisarmPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisarmPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DisarmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
