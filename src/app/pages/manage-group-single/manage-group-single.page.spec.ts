import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ManageGroupSinglePage } from './manage-group-single.page';

describe('ManageGroupSinglePage', () => {
  let component: ManageGroupSinglePage;
  let fixture: ComponentFixture<ManageGroupSinglePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageGroupSinglePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ManageGroupSinglePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
