import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PendingHelpPage } from './pending-help.page';

describe('PendingHelpPage', () => {
  let component: PendingHelpPage;
  let fixture: ComponentFixture<PendingHelpPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendingHelpPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PendingHelpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
