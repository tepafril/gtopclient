import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ManageIconPage } from './manage-icon.page';

describe('ManageIconPage', () => {
  let component: ManageIconPage;
  let fixture: ComponentFixture<ManageIconPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageIconPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ManageIconPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
