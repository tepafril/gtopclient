import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MyBalancePage } from './my-balance.page';

describe('MyBalancePage', () => {
  let component: MyBalancePage;
  let fixture: ComponentFixture<MyBalancePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyBalancePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyBalancePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
