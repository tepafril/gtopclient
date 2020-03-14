import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FuelPage } from './fuel.page';

describe('FuelPage', () => {
  let component: FuelPage;
  let fixture: ComponentFixture<FuelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuelPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FuelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
